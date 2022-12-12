import React, { useState, useContext } from "react";
import { UrlInputStyled } from "./styled/UrlInput.jsx";
import Tools from "./tools/index.jsx";
import { SlMagnifier } from "react-icons/sl";
import TerminalEmulator from "./terminal/index.jsx";
import DownloadModal from "./modals/downloadModal.jsx";
import AppStateContext from "../context/AppStateContext";

import axios from "../services/api";

const Container = () => {
  const { showTerminal, app_state_downloading ,update_terminal_log,stop_loading ,setAnalyzeData ,setAppState} = useContext(AppStateContext);
  const [urlInput, setUrlInput] = useState("");
  // const [intervalId, setIntervalId] = useState({});

 

  const get_output_in_interval =  (uuid ,interval_id) => {
      axios.get(`/${uuid}?output=true`).then((resp1)=>{
     
      const { analyze, end_at, output, start_at } = resp1.data.data;
      setAppState("GET-OUTPUT-OF-PROCESS")

      if(output){
        update_terminal_log(output)
      }

      if (end_at && typeof end_at === "number") {

        setAnalyzeData(analyze.download)
        stop_loading()
        clearInterval(interval_id);
      }

  })
    .catch (error=> {
      console.log(error);
      stop_loading()
    })
  };

  const start_download = async () => {
    try {
      const resp1 = await axios.get(`/download?url=${urlInput}`);
      let uuid = resp1.data.data.uuid;
      app_state_downloading(uuid);
      
      const interval_id =await setInterval(() => {
        get_output_in_interval(uuid , interval_id);
      }, 5000);
     
        
    } catch (error) {
      console.log(error);
      stop_loading()
    }
  };

  return (
    <div>
      <UrlInputStyled
        inputWidth="85%"
        label={{
          tag: true,
          content: <SlMagnifier onClick={start_download} fontSize="3rem" />,
        }}
        labelPosition="right"
        placeholder="Enter URL"
        id="url-input"
        size="huge"
        value={urlInput}
        onChange={(e) => setUrlInput(e.target.value)}
      />

      <Tools />

      <div>{showTerminal && <TerminalEmulator />}</div>

      <DownloadModal />
    </div>
  );
};

export default Container;
