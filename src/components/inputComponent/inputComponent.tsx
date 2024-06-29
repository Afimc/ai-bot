import { useState } from "react";
import "./inputComponent.scss";
import { Chat } from "../../functions/ollamaFunction";

function InputComponent(props: any) {
  const [inputValue, setInputValue] = useState("");
  const { llamaVersion,language, history, setHistory } = props;

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      sendMsg();
    }
  };

  const handleMessageChunk = (chunk:any) => {
    const newHistory = [...history, { role: "assistant", content: chunk }];
    setHistory(newHistory)
  };

  const sendMsg = async () => {
    const newHistory = [...history, { role: "user", content: inputValue }];
    setHistory(newHistory);
    setInputValue("");
    const answer = await Chat(llamaVersion, newHistory, language, handleMessageChunk);
    setHistory([...newHistory, answer]);
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
      <button onClick={() => sendMsg()}>Send</button>
    </div>
  );
}

export default InputComponent;
