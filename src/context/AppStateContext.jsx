import React, { useState } from "react";

const AppStateContext = React.createContext({});

/*

  APP STATE 

  -----------------------

    START-APP
    PROCESSING-URL
    GET-OUTPUT-OF-PROCESS
    DOWNLOAD-START
    DOWNLOAD-END


*/

export const AppStateContextProvider = ({ children }) => {
  const [appState, setAppState] = useState("START-APP");
  const [terminalData, setTerminalData] = useState("");
  const [analyzeData, setAnalyzeData] = useState({});

  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [loading, setLoading] = useState(false);

  const show_dl_modal = () => setShowDownloadModal(true);
  const hide_dl_modal = () => setShowDownloadModal(false);

  const show_ter = () => setShowTerminal(true);
  const hide_ter = () => setShowTerminal(false);

  const start_loading = () => setLoading(true);
  const stop_loading = () => setLoading(false);

  const app_state_downloading = (uuid) => {
    setAppState("PROCESSING-URL");
    if(!window.localStorage.getItem("uuid")){
      window.localStorage.setItem("uuid", JSON.stringify( uuid));
    }
    start_loading();
  };
  const update_terminal_log = (data) => {
    show_ter();
    setTerminalData(data);
  };

  return (
    <AppStateContext.Provider
      value={{
        showTerminal: showTerminal,
        show_ter: show_ter,
        hide_ter: hide_ter,
        showDownloadModal: showDownloadModal,
        appState: appState,
        loading: loading,
        terminalData: terminalData,
        update_terminal_log: update_terminal_log,
        show_dl_modal: show_dl_modal,
        hide_dl_modal: hide_dl_modal,
        app_state_downloading: app_state_downloading,
        setAppState:setAppState,
        stop_loading:stop_loading,
        analyzeData:analyzeData,
        setAnalyzeData:setAnalyzeData,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateContext;
