import React, { useState, useContext } from "react";
import { Button, Icon, Label, Modal } from "semantic-ui-react";
import { UrlInputStyled } from "../styled/UrlInput.jsx";
import "./modal.css";
import { TfiEmail } from "react-icons/tfi";
import AppStateContext from "../../context/AppStateContext.jsx";
import axios from "../../services/api";
import { toast } from "react-hot-toast";

const DownloadModal = () => {
  const { show_dl_modal, hide_dl_modal, showDownloadModal } =
    useContext(AppStateContext);
  const data = JSON.parse(localStorage.getItem("dt"));
  const [email, setEmail] = useState("");

  const DownloadWebPage = async () => {
    try {
      const response = await axios.get(`/${data.uuid}/zip`, {
        responseType: "blob",
      });

      const link = document.createElement("a");

      link.href = window.URL.createObjectURL(
        new Blob([response.data], { type: response.headers["content-type"] })
      );
      link.setAttribute("download", `${new URL(data.url).hostname}.zip`);
      document.body.appendChild(link);
      link.click();
      URL.revokeObjectURL(link.href);
      hide_dl_modal();
    } catch (error) {
      console.log(error);
    }
  };

  const sendEmail = async () => {
    try {
      const response = await axios.get(`/${data.uuid}/send?email=${email}`);

      console.log("response >>> ", response);

      DownloadWebPage();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      id="modal-container"
      size="small"
      open={showDownloadModal}
      onClose={hide_dl_modal}
      onOpen={show_dl_modal}
    >
      <Modal.Header>
        <p className="modal-header-text">
          Please first enter your email next download it
        </p>
      </Modal.Header>
      <Modal.Content>
        <div className="email-input">
          <UrlInputStyled
            type="email"
            label={{
              tag: true,
              content: (
                <TfiEmail
                  onClick={() => {
                    if (!email) {
                      toast.error("Please first type your email");
                    } else {
                      sendEmail();
                    }
                  }}
                  fontSize="3rem"
                />
              ),
            }}
            labelPosition="right"
            placeholder="Enter You'r Email"
            size="large"
            inputWidth="87%"
            id="url-input"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={hide_dl_modal}>
          Close
        </Button>
        <Button
          positive
          onClick={() => {
            if (!email) {
              toast.error("Please first type your email");
            } else {
              sendEmail();
            }
          }}
        >
          Download
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default DownloadModal;
