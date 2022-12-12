import React, { useContext } from "react";
import { Button, Icon, Label } from "semantic-ui-react";
import AppStateContext from "../../context/AppStateContext";
import "./tools.css";
import { BsCloudDownload, BsSuitHeart, BsTerminal } from "react-icons/bs";
import { GiChart } from "react-icons/gi";
const Tools = () => {
  const {
    showTerminal,
    terminalData,
    appState,
    show_ter,
    hide_ter,
    show_dl_modal,
    toggleAnalyzeRow,
  } = useContext(AppStateContext);

  const data = JSON.parse(window.localStorage.getItem("dt"));

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          height: "5rem",
        }}
      >
        <div>
          {terminalData && (
            <Button
              id="show-terminal-button"
              as="div"
              labelPosition="right"
              onClick={() => {
                if (showTerminal) {
                  hide_ter();
                } else {
                  show_ter();
                }
              }}
            >
              <Button>
                {showTerminal ? "Hide Terminal" : "Show Terminal"}
              </Button>
              <Label as="a" pointing="left">
                <BsTerminal />
              </Label>
            </Button>
          )}
        </div>
        {appState === "PROCESS-SUCCESSFULLY-END" && (
          <Button
            style={{ height: "2.5rem" }}
            as="div"
            id="download-button"
            labelPosition="right"
            onClick={() => show_dl_modal()}
          >
            <Button>Download</Button>
            <Label as="a" basic pointing="left">
              <BsCloudDownload />
            </Label>
          </Button>
        )}
        {appState === "PROCESS-SUCCESSFULLY-END" &&
          data?.analyze?.download?.files && (
            <Button
              style={{ height: "2.5rem" }}
              as="div"
              id="download-button"
              labelPosition="right"
              onClick={() => toggleAnalyzeRow()}
            >
              <Button>Analyze Data</Button>
              <Label as="a" basic pointing="left">
                <GiChart />
              </Label>
            </Button>
          )}

        <Button
          style={{ height: "2.5rem" }}
          id="donate-button"
          as="div"
          labelPosition="right"
        >
          <Button>Donate</Button>
          <Label as="a" basic pointing="left">
            <BsSuitHeart />
          </Label>
        </Button>
      </div>
    </div>
  );
};

export default Tools;
