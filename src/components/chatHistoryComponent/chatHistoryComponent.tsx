import './chatHistoryComponent.scss';

function ChatHistoryComponent({ history }:any) {

  return (
    <div className="ChatHistoryComponent">
      {history.map((message:any, index:number) => (
        <p key={index}>{message.role} : {message.content}</p>
      ))}
    </div>
  );
}

export default ChatHistoryComponent;
