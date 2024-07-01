import ollama from 'ollama';
import { IMessage } from '../components/chatComponent/chatComponent';
import { IConfig } from '../App';
import { Dispatch, SetStateAction } from 'react';

export async function Chat(history:IMessage[], config:IConfig, setChunkMessage:Dispatch<SetStateAction<string>>) {
  const messageOne:IMessage = {role:'system', content: 'your role is to be my friend'};
  const messageTwo:IMessage = {role: 'system', content: `answer always on ${config.language}`};
  const systemMessages = [messageOne, messageTwo];
  const messages = [...systemMessages, ...history]
  let fullResponse = ''

  try {
    const response = await ollama.chat({model: config.version, messages: messages,stream: true});

    for await (const part of response) {
      const chunk = part.message.content;
      fullResponse += chunk;
      setChunkMessage(fullResponse)
    }

  } catch (error) {
    console.error('Error in chat:', error);
  }

return fullResponse
}
