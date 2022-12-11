import { useState } from "react";
import {
  UrlInputStyled,
  StyledContainer,
  StyledCenteral,
} from "./components/styled/UrlInput.jsx";
import Tools from "./components/tools/index.jsx";
import {SlMagnifier} from  'react-icons/sl';


function App() {
  const [showTerminal, setShowTerminal] = useState(false);

  return (
    <StyledContainer>
      <StyledCenteral>
        <UrlInputStyled
          inputWidth="85%"
          label={{ tag: true, content: <SlMagnifier fontSize="3rem" /> }}
          labelPosition="right"
          placeholder="Enter URL"
          id="url-input"
          size="huge"
        />

        <Tools
          showTerminal={showTerminal}
          setShowTerminal={setShowTerminal}
          
        />
      </StyledCenteral>
    </StyledContainer>
  );
}

export default App;
