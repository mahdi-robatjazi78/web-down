import React, { useState } from "react";

const AppStateContext = React.createContext({});

export const AppStateContextProvider = ({ children }) => {
  const [appState, setAppState] = useState("START");
  const [terminalData, setTerminalData] = useState(
    "hello world this is terminal data"
  );

  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [loading, setLoading] = useState(true);

  const show_dl_modal = () => setShowDownloadModal(true);
  const hide_dl_modal = () => setShowDownloadModal(false);

  const show_ter = () => setShowTerminal(true);
  const hide_ter = () => setShowTerminal(false);

  const start_loading = () => setLoadings(true);
  const stop_loading = () => setLoading(false);

  const app_state_downloading = (uuid) => {
    setAppState("DOWNLOADING");
    window.localStorage.setItem(uuid, JSON.stringify({ uuid }));
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
        show_dl_modal: show_dl_modal,
        hide_dl_modal: hide_dl_modal,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateContext;
