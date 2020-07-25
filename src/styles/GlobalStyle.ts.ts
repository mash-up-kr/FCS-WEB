import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root{
    height: 100%;
  }
  body {
    font-family: "Nanum Gothic", sans-serif;
  }
  #root {
    position: relative;
  }
`;

export default GlobalStyles;
