import './App.scss'
import PopupComponent from './components/popupComponent/popupComponent'
import { useState } from 'react';
import ChatComponent from './components/chatComponent/chatComponent';

export type TVersion = 'llama2' | 'llama3';
export type TLanguage = 'Bulgarian' | 'Spanish' | 'English';

export interface IConfig {
  version: TVersion;
  language: TLanguage;
}

function App() {
  const [config, setConfig] = useState<IConfig | null>(null);

  return (
    <div className="app">
      {
        !config 
          ? <PopupComponent setConfig={setConfig} />
          : <ChatComponent config={config} />
      }
    </div>
  );
}

export default App;
