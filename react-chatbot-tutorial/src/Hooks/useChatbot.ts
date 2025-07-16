import react from 'react';
import axios from 'axios';

interface Message{
    text:string;
    sender:'user' | 'bot';
}

const useChatbot= ()=> {
    
    const [messages, setMessages] = react.useState<Message[]>([]);
    const sendMessage = async(message:string) => {
        const userMessages:Message[]=[...messages, {text: message, sender: 'user'}];
        setMessages(userMessages);
        try{
            const response=await axios.post('https://api.openai.com/v1/chat/completions',
                {
                model:"meta-llama/Llama-3.1-8B-Instruct",
                message:[{
                    role: 'user',
                    content: messages
                
                }]
            },
                {
                        headers:{
                        'Content-Type': 'application/json',
                        Authorization:"Bearer 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"
                    }
            }
            );
            const botMessage:Message={
                text: response.data.choices[0].message.content,
                sender: 'bot'
            };
            setMessages([...userMessages, botMessage]);

        }
        catch(error)
        {
            console.log("Error fetching AI response:", error);

        }
        
    }
    return {messages, sendMessage};
}
export default useChatbot;