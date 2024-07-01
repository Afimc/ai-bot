import { useState } from "react";
import "./inputComponent.scss";

interface IInputProps {
  onSend: (message: string) => void;
  isReady: boolean;
}

function InputComponent(props: IInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const onSend = (event: any) => {
    if (event.key === "Enter" && props.isReady) {
      props.onSend(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="inputComponent">
      <input
        type="text"
        id="inputField"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={onSend}
        placeholder="Ask me something"
      />
      <button
        onClick={() => {props.onSend(inputValue); setInputValue("")}} disabled={!props.isReady}>Send</button>
    </div>
  );
}

export default InputComponent;
