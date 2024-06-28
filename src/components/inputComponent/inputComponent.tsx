import { useEffect, useState } from 'react'
import './inputComponent.scss'
import ollama from 'ollama'

function InputComponent(props:any) {
    const [inputValue, setInputValue] = useState('');
    const [question, setQuestion] = useState('');
  

    // useEffect(()=>{
      
    // },[question])

  const handleInputChange = (event:any) =>{
    setInputValue(event.target.value)
  }

  const sendMsg = () =>{
    setQuestion(inputValue);
       
    ollama.chat({
        model: 'llama2',
        messages: [{ role: 'user', content: inputValue }],
    })
    .then((result) => {
       props.setanswer(result.message.content)
       
    }).catch((err) => {
        console.log(err)
    });
    setInputValue('')
  }
  
  

  return (
    <div className="inputComponent">
      <input type="text" id="inputField" value={inputValue} onChange={handleInputChange} placeholder="Ask me something"/>
      <button onClick={()=>sendMsg()}>Send</button>
    </div>
  )
}

export default InputComponent
