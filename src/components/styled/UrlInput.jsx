
import React from 'react';
import styled from 'styled-components';
import { Input } from 'semantic-ui-react';

export const UrlInputStyled = styled(Input)`
  color:green;
  width:${props=>props.inputWidth || "100%"};
  #url-input{
    min-width:450px;
    width: 100%;
    font-size:2rem;
    border:2px solid gray;
    color:orange;
    background: transparent;
    letter-spacing: 2px;
    font-family: Nunito, sans-serif;
    &:hover{
      border:2px solid #d1d1d1;
      ::placeholder{
        color:#d1d1d1
      }
    }
    &:focus{
    border:2px solid orange;
      ::placeholder{
        color:orange; 
      }
    }
    ::placeholder{
      color:gray;
    }
  }
  .ui.tag.label {
    background: #82E282;
  }
`;


export const StyledContainer = styled.div`
  min-height:100vh;
  max-height:150vh;
  width:100%;
  background-image: linear-gradient(to top, #46B83D ,  #223F15  , #223F15 );
`

export const StyledCenteral = styled.div`  
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  width:700px;
`



