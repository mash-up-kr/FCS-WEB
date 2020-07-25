import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans',  'Sans-serif';
  }
  html, body, #root{
    height: 100%;
  }
  
  #root {
    position: relative;
    min-height: 100vh;
  }
`;

export default GlobalStyles;
