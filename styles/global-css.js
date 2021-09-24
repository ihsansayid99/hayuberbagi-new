import styled, { createGlobalStyle } from "styled-components";
import {device} from './responsive';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`;
const Container = styled.div`
  padding: 0 15rem;
  @media all and (max-width: 480px) {
    padding: 0 1rem;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    padding: 0 4rem;
  }
  @media all and (min-width: 768px) and (max-width: 1024px) {
    padding: 0 4rem;
  }
  @media only screen and (min-width: 64.063em) and (max-width: 90em) {
    padding: 0 3rem;
  }
`;
const theme = {
  colors: {
    primary: "#000245",
  },
};

export{
  GlobalStyle,
  theme,
  Container
}
