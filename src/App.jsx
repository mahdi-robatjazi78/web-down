import { useState } from "react";
import Container from './components'
import { StyledContainer,
  StyledCenteral,} from './components/styled/UrlInput'

function App() {

  return (
    <StyledContainer>
      <StyledCenteral>
        <Container />
      </StyledCenteral>
    </StyledContainer>
  );
}

export default App;
