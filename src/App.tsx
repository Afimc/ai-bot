
import './App.scss'
import InputComponent from './components/inputComponent/inputComponent'
import ChatHistoryComponent from './components/chatHistoryComponent/chatHistoryComponent'
import { useState } from 'react';

function App() {
  const [answer, setAnswer] = useState('');

  return (
    <div className="app">
      <ChatHistoryComponent answer={answer} />
      <InputComponent setanswer={setAnswer}/>
    </div>
  )
}

export default App
