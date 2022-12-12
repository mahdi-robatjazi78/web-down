import React, { useEffect, useState, useContext } from "react";
import { UrlInputStyled } from "./styled/UrlInput.jsx";
import Tools from "./tools/index.jsx";
import { SlMagnifier } from "react-icons/sl";
import TerminalEmulator from "./terminal/index.jsx";
import DownloadModal from "./modals/downloadModal.jsx";
import AppStateContext from "../context/AppStateContext";
import toast from "react-hot-toast";
import axios from "../services/api";
import CircleWithBarComponent from "./loading/circleWithBar.jsx";
import AnalyzeRow from "./analyzeRow/analyzeRow.jsx";

const Container = () => {
  const {
    showTerminal,
    app_state_downloading,
    update_terminal_log,
    stop_loading,
    start_loading,
    setAppState,
    loading,
    showAnalyzeRow,
  } = useContext(AppStateContext);
  const [urlInput, setUrlInput] = useState("");
  // const [intervalId, setIntervalId] = useState({});

  const get_output_in_interval = (uuid, interval_id) => {
    axios
      .get(`/${uuid}?output=true`)
      .then((resp1) => {
        const { analyze, end_at, output, start_at, url } = resp1.data.data;
        setAppState("GET-OUTPUT-OF-PROCESS");
        localStorage.setItem(
          "dt",
          JSON.stringify({ analyze, end_at, output, start_at, url, uuid })
        );

        if (output) {
          update_terminal_log(output);
        }

        if (end_at && typeof end_at === "number") {
          stop_loading();
          clearInterval(interval_id);
          setAppState("PROCESS-SUCCESSFULLY-END");
          toast.success("Ready To Download 🚩🚩🚩");
        }
      })
      .catch((error) => {
        console.log(error);
        stop_loading();
      });
  };

  const start_download = (uuid) => {
    const interval_id = setInterval(() => {
      get_output_in_interval(uuid, interval_id);
    }, 5000);
  };

  const send_url = async () => {
    try {
      if (!urlInput) {
        toast.error("Please fill url input ");
      } else {
        const resp1 = await axios.get(`/download?url=${urlInput}`);
        let uuid = resp1.data.data.uuid;
        app_state_downloading(uuid, urlInput);
        start_download(uuid);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("dt"));
    if (data?.output) {
      update_terminal_log(data.output);
    }
    if (data?.url) {
      setUrlInput(data.url);

      if (data?.end_at) {
        stop_loading();
        setAppState("PROCESS-SUCCESSFULLY-END");
        toast.success("Ready To Download 🚩🚩🚩");
      } else {
        app_state_downloading(data.uuid, data.url);
        start_download(data.uuid);
      }
    }
  }, []);

  return (
    <div>
      <UrlInputStyled
        inputWidth="85%"
        label={{
          tag: true,
          content: loading ? (
            <CircleWithBarComponent />
          ) : (
            <SlMagnifier onClick={send_url} fontSize="3rem" />
          ),
        }}
        labelPosition="right"
        placeholder="Enter URL"
        id="url-input"
        size="huge"
        value={urlInput}
        onChange={(e) => setUrlInput(e.target.value)}
      />

      <Tools />

      {showAnalyzeRow && <AnalyzeRow />}

      {showTerminal && <TerminalEmulator />}

      <DownloadModal />
    </div>
  );
};

export default Container;
