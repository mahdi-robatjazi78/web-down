import React, { useState } from "react";
import { Button, Icon, Label } from "semantic-ui-react";
import TerminalEmulator from "../terminal/index.jsx";
import "./tools.css";
import DownloadModal from "../modals/downloadModal.jsx";
import { BsCloudDownload ,BsSuitHeart, BsTerminal } from "react-icons/bs";
const Tools = (props) => {
  const { showTerminal, setShowTerminal } = props;
  const [openDownloadModal, setOpenDownloadModal] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "5rem",
        }}
      >
        <div>
          {showTerminal ? (
            <Button
              id="hide-terminal-button"
              as="div"
              labelPosition="right"
              onClick={() => setShowTerminal(false)}
            >
              <Button>Hide Terminal</Button>
              <Label as="a" pointing="left">
                <BsTerminal />
              </Label>
            </Button>
          ) : (
            <Button
              style={{ height: "2.5rem" }}
              id="show-terminal-button"
              as="div"
              labelPosition="right"
              onClick={() => setShowTerminal(true)}
            >
              <Button>Show Terminal</Button>
              <Label as="a" pointing="left">
                <BsTerminal />
              </Label>
            </Button>
          )}
        </div>
        <div id="buttons-box">
        <Button
          style={{ height: "2.5rem" }}
          as="div"
          id="download-button"
          labelPosition="right"
          onClick={()=>setOpenDownloadModal(true)}
        >
          <Button>Download</Button>
          <Label as="a" basic pointing="left">
            <BsCloudDownload />
          </Label>
        </Button>
            <DownloadModal
              openDownloadModal={openDownloadModal}
              setOpenDownloadModal={setOpenDownloadModal}
            />
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
      <div>{showTerminal && <TerminalEmulator />}</div>
    </div>
  );
};

export default Tools;
