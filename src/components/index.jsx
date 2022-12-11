import React  , {useState} from 'react'
import { UrlInputStyled } from "./styled/UrlInput.jsx";
import Tools from "./tools/index.jsx";
import { SlMagnifier } from "react-icons/sl";
import TerminalEmulator from "./terminal/index.jsx";
import DownloadModal from './modals/downloadModal.jsx';

const Container = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  const [openDownloadModal, setOpenDownloadModal] = useState(false);

  return (
    <div>
      <UrlInputStyled
        inputWidth="85%"
        label={{ tag: true, content: <SlMagnifier fontSize="3rem" /> }}
        labelPosition="right"
        placeholder="Enter URL"
        id="url-input"
        size="huge"
      />

      <Tools 
        showTerminal={showTerminal}
        setShowTerminal={setShowTerminal}
        openDownloadModal={openDownloadModal}
        setOpenDownloadModal={setOpenDownloadModal}  
        
      />

      <div>{showTerminal && <TerminalEmulator />}</div>
      
      
      <DownloadModal
        openDownloadModal={openDownloadModal}
        setOpenDownloadModal={setOpenDownloadModal}
      />



    </div>
  );
};

export default Container;
