import React,{useState} from "react";

function Form() {
    // const [text,setText]=useState("");

    const [name,setName]=useState({firstName:'',lastName:''});

    // function handleChange(event){
    //     setText(event.target.value);
    // }

    return(
        <div>
            {/* <form>
                <input onChange={handleChange} type="text" value={text}/>
                <h2>{text}</h2>
            </form> */}

            <form>
                <input onChange={(e)=>setName({...name,firstName:e.target.value})} type="text" value={name.firstName}/>
                <input onChange={(e)=>setName({...name,lastName:e.target.value})} type="text" value={name.lastName}/>
                <h2>{!name.firstName=="" && !name.lastName==""? `Welcome ${name.firstName}  ${name.lastName}`:""}</h2>
            </form>
        </div>
    )
}
export default Form;