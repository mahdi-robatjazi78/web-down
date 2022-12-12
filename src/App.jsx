import { useState, useContext } from "react";
import Container from "./components";
import { StyledContainer, StyledCenteral } from "./components/styled/UrlInput";
import AppStateContext from "./context/AppStateContext";
import "./app.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster style={{ fontSize: "1.3rem" }} />
      <StyledContainer>
        <StyledCenteral>
          <Container />
        </StyledCenteral>
      </StyledContainer>
    </>
  );
}

export default App;
