import { useState } from "react";
import "./inputComponent.scss";
import { Chat } from "../../functions/ollamaFunction";

function InputComponent(props: any) {
  const [inputValue, setInputValue] = useState("");
  const [isResponding, setIsResponding] = useState(false)
  const { llamaVersion,language, history, setHistory } = props;

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter" && !isResponding) {
      sendMsg();
    }
  };

  const handleMessageChunk = (chunk: any) => {
    setHistory((prevHistory: any) => {
      const newHistory = [...prevHistory];
      const lastMessage = newHistory.pop();
      if (lastMessage && lastMessage.role === 'assistant') {
        lastMessage.content = chunk;
        newHistory.push(lastMessage);
      } else {
        if (lastMessage) newHistory.push(lastMessage);
        newHistory.push({ role: "assistant", content: chunk });
      }
      return newHistory;
    });
  };

  const sendMsg = async () => {
    setIsResponding(true)
    const newHistory = [...history, { role: "user", content: inputValue }];
    setHistory(newHistory);
    setInputValue(""); 
    const fullAnswer = await Chat(llamaVersion, newHistory, language, handleMessageChunk);
    setHistory((prevHistory: any) => [...prevHistory.slice(0, -1), { role: "assistant", content: fullAnswer }]);
    setIsResponding(false)
  };

  return (
    <div className="inputComponent">
      <input
        type="text"
        id="inputField"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Ask me something"
        
      />
      <button onClick={() => sendMsg()} disabled={isResponding}>Send</button>
    </div>
  );
}

export default InputComponent;
