import react from 'react';  
import { LuBolt, LuBot, LuSendHorizontal } from 'react-icons/lu';
import useChatbot from '../Hooks/useChatbot';

interface IChatComponentProps{

}

const ChatComponent: React.FunctionComponent<IChatComponentProps>=({})=> {
  const [input, setInput] = react.useState<string>('');
    const {messages, sendMessage} = useChatbot();
  const handleClick = () => {
    if (input.trim() === '') return; // Prevent sending empty messages
    console.log("User input:", input);
    sendMessage(input); // Send the message to the chatbot
    setInput(''); // Clear input after sending
  };

  return (
    <div className="flex flex-col h-[80vh] bg-white">
      <h2 className="flex text-center text-lg font-semibold p-4 bg-blue-100 text-blue-800 justify-center items-center gap-2">
        React + AI Chatbot <LuBot size={25} />
      </h2>
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg,index) => (
          <div key={index} className={`text-lg rounded-lg max-w-xs p-3 ${msg.sender==='user'?'bg-blue-500 text-white ml-auto':'bg-grey-300 text-grey-800'}`}>
            {msg.text}
          </div>
        )
         
          )}
      </div>
      <div className='flex p-4 items-center bg-grey-50'>
        <input 
            type="text"
            placeholder="Type your message here..."
            className="flex-1 focus:outline-none rouned-lg p-2"
            value={input}
            onChange={(e)=>setInput(e.currentTarget.value)}
        />

        <button onClick={handleClick}>
            <LuSendHorizontal size={25} />
        </button>

      </div>
    </div>
  );
}

export default ChatComponent;