// import ollama from 'ollama'




// export async function Chat(llamaVersion:string, hystory:any[], language:any, handleMessageChunk:any) {
// const system = {role:'system', content:`your role is to be my friend,  ${language? `Answer only on ${language} language`:''} `}
// let fullresponce=''
//         const messages = [system, ...hystory]
//         const responce = await ollama.chat({
//             model: llamaVersion,
//             messages: messages, 
//             stream:true,   
//         })
//         for await (const part of responce) {
//             process.stdout.write(part.message.content)
//           }
    
 
//     return fullresponce
// }



import ollama from 'ollama';

export async function Chat(llamaVersion:string, history:any, language:string, onMessageChunk:any) {
  const system = {role: 'system',content: `your role is to be my friend, ${language ? `Answer only in ${language} language` : ''}`};
  const messages = [system, ...history];
  let fullResponse = '';

  try {
    const response = await ollama.chat({model: llamaVersion, messages: messages,stream: true,});

    for await (const part of response) {
      const chunk = part.message.content;
      fullResponse += chunk;
      onMessageChunk(fullResponse); 
    }
    
   
  } catch (error) {
    console.error('Error in chat:', error);
  }

return fullResponse
}
