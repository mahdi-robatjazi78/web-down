import React, { useContext } from "react";
import { Button, Icon, Label } from "semantic-ui-react";
import AppStateContext from "../../context/AppStateContext";
import "./tools.css";
import { BsCloudDownload, BsSuitHeart, BsTerminal } from "react-icons/bs";
const Tools = () => {

  const {showTerminal , show_ter,hide_ter  , show_dl_modal} = useContext(AppStateContext)

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
              onClick={()=>hide_ter()}
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
              onClick={()=>show_ter()}
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
            onClick={()=>show_dl_modal()}
          >
            <Button>Download</Button>
            <Label as="a" basic pointing="left">
              <BsCloudDownload />
            </Label>
          </Button>

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
    </div>
  );
};

export default Tools;
