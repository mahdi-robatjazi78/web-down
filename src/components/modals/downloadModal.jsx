import React from "react";
import { Button, Icon, Label, Modal } from "semantic-ui-react";
import { UrlInputStyled } from "../styled/UrlInput.jsx";
import "./modal.css";
import { TfiEmail } from "react-icons/tfi";



const DownloadModal = (props) => {
  const { openDownloadModal, setOpenDownloadModal } = props;
  return (
    <Modal
      id="modal-container"
      dimmer="blurring"
      size="small"
      open={openDownloadModal}
      onClose={() => setOpenDownloadModal(false)}
      onOpen={() => setOpenDownloadModal(true)}
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
            label={{ tag: true, content: <TfiEmail fontSize="3rem" /> }}
            labelPosition="right"
            placeholder="Enter You'r Email"
            size="large"
            inputWidth="87%"
            id="url-input"
          />
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={() =>{setOpenDownloadModal(false)}}>
          Close
        </Button>
        <Button positive>Download</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default DownloadModal;
