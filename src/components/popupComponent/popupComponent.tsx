import { IConfig, TLanguage, TVersion } from "../../App";
import "./popupComponent.scss";
import { Dispatch, SetStateAction, useState } from "react";

interface IConfigProps {
  setConfig: Dispatch<SetStateAction<IConfig | null>>;
}

function PopupComponent(props: IConfigProps) {
  const [selectedVersion, setSelectedVersion] = useState<TVersion | "">("");
  const [selectedLanguage, setSelectedLanguage] = useState<TLanguage>("English");

  const onVersionChange = (version: TVersion) => {
    setSelectedLanguage('English');
    setSelectedVersion(version);
  };

  const onEnter = () => {
    if (!selectedVersion) return;
    props.setConfig({
      version: selectedVersion,
      language: selectedLanguage,
    });
  };

  return (
    <div className="popup">
      <div className="selectVersion">
        <select
          defaultValue={""}
          onChange={(event) => onVersionChange(event.target.value as TVersion)}
        >
          <option disabled value={""}>Select Version</option>
          <option value={"llama2"}>Llama2</option>
          <option value={"llama3"}>Llama3</option>
        </select>
      </div>
      {selectedVersion === "llama3" && (
        <div className="selectLanguage">
          <select defaultValue={selectedLanguage} onChange={(event) => setSelectedLanguage(event.target.value as TLanguage)}>
            <option disabled value={""}>Select Language</option>
            <option value={"English"}>English</option>
            <option value={"Spanish"}>Spanish</option>
            <option value={"Bulgarian"}>Bulgarian</option>
          </select>
        </div>
      )}
      <button disabled={!selectedVersion} onClick={() => onEnter()}>GoGoGo</button>
    </div>
  );
}

export default PopupComponent;
