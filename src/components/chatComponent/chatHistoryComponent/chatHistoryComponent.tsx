import { IMessage } from '../chatComponent';
import './chatHistoryComponent.scss';

interface IChatHistoryProps {
  history:IMessage[];
  chunkMessage:string;
}

function ChatHistoryComponent( props :IChatHistoryProps) {

  return (
    <div className="ChatHistoryComponent">
      {props.history.map((message:IMessage, index:number) => (
        <p key={index}>{message.role} : {message.content}</p>
      ))}
      {
        props.chunkMessage &&
        <p>assistant : {props.chunkMessage}</p>
      }
      
    </div>
  );
}

export default ChatHistoryComponent;
