import React, { useEffect, useContext } from "react";
import { XTerm } from "xterm-for-react";
import AppStateContext from "../../context/AppStateContext";

const TerminalEmulator = () => {
  const xtermRef = React.useRef(null);
  const { terminalData } = useContext(AppStateContext);

  useEffect(() => {
    xtermRef.current.terminal.writeln(terminalData);
  }, [terminalData]);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <XTerm ref={xtermRef} />
    </div>
  );
};

export default TerminalEmulator;
