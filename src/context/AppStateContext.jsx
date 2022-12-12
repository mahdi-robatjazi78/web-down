import React, { useState } from "react";
import AnalyzeRow from "../components/analyzeRow/analyzeRow";

const AppStateContext = React.createContext({});

/*

  APP STATE 

  -----------------------

    START-APP
    PROCESSING-URL
    GET-OUTPUT-OF-PROCESS
    PROCESS-SUCCESSFULLY-END
    

  */

export const AppStateContextProvider = ({ children }) => {
  const [appState, setAppState] = useState("START-APP");
  const [terminalData, setTerminalData] = useState("");

  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAnalyzeRow, setShowAnalyzeRow] = useState(false);

  const show_dl_modal = () => setShowDownloadModal(true);
  const hide_dl_modal = () => setShowDownloadModal(false);

  const show_ter = () => setShowTerminal(true);
  const hide_ter = () => setShowTerminal(false);

  const start_loading = () => setLoading(true);
  const stop_loading = () => setLoading(false);

  const app_state_downloading = (uuid, url) => {
    setAppState("PROCESSING-URL");
    if (!window.localStorage.getItem("dt")) {
      window.localStorage.setItem("dt", JSON.stringify({ uuid, url }));
    }
    start_loading();
  };
  const update_terminal_log = (data) => {
    setTerminalData(data);
  };
  const toggleAnalyzeRow = () => {
    setShowAnalyzeRow(!showAnalyzeRow);
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
        setAppState: setAppState,
        stop_loading: stop_loading,
        showAnalyzeRow: showAnalyzeRow,
        toggleAnalyzeRow: toggleAnalyzeRow,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateContext;
