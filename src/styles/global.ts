import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    // light-theme
    // background: #f8f8f9;
    background: #0b0b15;
    -webkit-font-smoothing: antialiased
  }
  body, input, button {
    font: 16px sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
