import { useState , useContext } from "react";
import Container from './components'
import { StyledContainer,StyledCenteral,} from './components/styled/UrlInput'
import CircleWithBarComponent from './components/loading/circleWithBar'
import AppStateContext from "./context/AppStateContext";
import "./app.css"
function App() {


  return (
    <StyledContainer>
    <CircleWithBarComponent />
      <StyledCenteral>
        <Container />
      </StyledCenteral>
    </StyledContainer>
  );
}

export default App;
