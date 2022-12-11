import React  , {useState , useContext} from 'react'
import { UrlInputStyled } from "./styled/UrlInput.jsx";
import Tools from "./tools/index.jsx";
import { SlMagnifier } from "react-icons/sl";
import TerminalEmulator from "./terminal/index.jsx";
import DownloadModal from './modals/downloadModal.jsx';
import AppStateContext from '../context/AppStateContext'

const Container = () => {

  const {showTerminal} = useContext(AppStateContext)



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

      <Tools />

      <div>{showTerminal && <TerminalEmulator />}</div>
      
      
      <DownloadModal />



    </div>
  );
};

export default Container;
