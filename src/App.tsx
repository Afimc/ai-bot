import './App.scss'
import InputComponent from './components/inputComponent/inputComponent'
import ChatHistoryComponent from './components/chatHistoryComponent/chatHistoryComponent'
import PopupComponent from './components/popupComponent/popupComponent'
import { useState } from 'react';

function App() {
  const [version, setVersion] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const [showPopup, setShowPopup] = useState<boolean>(true);
  const [history, setHistory] = useState<Array<{ role: string, content: string }>>([]);

  const handleSelectVersion = (selectedVersion: string, selectedLanguage?: string) => {
    setVersion(selectedVersion);
    if (selectedLanguage) {
      setLanguage(selectedLanguage);
    }
    setShowPopup(false);
  };

  return (
    <div className="app">
      {showPopup ? 
        <PopupComponent onSelectVersion={handleSelectVersion} />
       : 
        <>
          <ChatHistoryComponent history={history} />
          <InputComponent
            llamaVersion={version}
            language={language}
            history={history}
            setHistory={setHistory}
          />
        </>
      }
    </div>
  );
}

export default App;
