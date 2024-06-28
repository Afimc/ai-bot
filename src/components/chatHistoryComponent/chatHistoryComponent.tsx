import { useEffect, useState } from 'react';
import './chatHistoryComponent.scss';

interface ChatHistoryComponentProps {
  answer: string;
}

function ChatHistoryComponent({ answer }: ChatHistoryComponentProps) {
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  useEffect(() => {
    if (answer) {
      setChatHistory((prevHistory) => [...prevHistory, answer]);
      console.log({ chatHistory: [...chatHistory, answer] });
    }
  }, [answer]);

  return (
    <div className="ChatHistoryComponent">
      {chatHistory.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
}

export default ChatHistoryComponent;

