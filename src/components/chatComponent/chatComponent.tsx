import { useState } from "react";
import { IConfig } from "../../App";
import ChatHistoryComponent from "./chatHistoryComponent/chatHistoryComponent";
import InputComponent from "./inputComponent/inputComponent";
import { Chat } from "../../functions/ollamaFunction";
import './chatComponent.scss'

interface IChatProps {
  config: IConfig;
}

export type TRole = 'assistant' | 'system' | 'user';

export interface IMessage {
    role: TRole;
    content: string;
}

function ChatComponent(props: IChatProps) {
    const [history, setHistory] = useState<IMessage[]>([]);
    const [chunkMessage, setChunkMessage] = useState('');
    const [isReady, setIsReady] = useState(true);

    const onSend = async (message:string) => {
        setIsReady(false);
        const newMessage: IMessage = {role: 'user', content: message};
        const newHistory = [...history, newMessage];
        setHistory(newHistory);
        const response = await Chat(newHistory, props.config, setChunkMessage);
        const responseMessage:IMessage = {role:'assistant', content:response};
        setChunkMessage('');
        setHistory((prevHistory)=>[...prevHistory, responseMessage]);
        setIsReady(true);
    }

    return (
    <div className="chatComponent">
        <ChatHistoryComponent history={history} chunkMessage={chunkMessage}/>
        <InputComponent onSend={onSend} isReady={isReady}/>
    </div>
    );
}

export default ChatComponent;
