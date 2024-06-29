import './popupComponent.scss';
import  { useState } from 'react';

function PopupComponent( props:any) {
  const {onSelectVersion} = props
  const [selectedVersion, setSelectedVersion] = useState('');

  const handleSelectVersion = (version:string) => {
    setSelectedVersion(version);
    if (version !== 'llama3') {
      onSelectVersion(version);
    }
  };

  const handleSelectLanguage = (language:string) => {
    onSelectVersion(selectedVersion, language);
  };

  return (
    <div className="popup">
      
      {!selectedVersion && (
        <>
          <h2>Select LLaMA Version</h2>
          <button onClick={() => handleSelectVersion('llama2')}>LLaMA 2</button>
          <button onClick={() => handleSelectVersion('llama3')}>LLaMA 3</button>
          
        </>
      )}
      {selectedVersion === 'llama3' && (
        <>
          <h2>Select Language</h2>
          <button onClick={() => handleSelectLanguage('Bulgarian')}>Bulgarian</button>
          <button onClick={() => handleSelectLanguage('English')}>English</button>
          <button onClick={() => handleSelectLanguage('Spanish')}>Spanish</button>
        </>
      )}
    </div>
  );
}

export default PopupComponent;

