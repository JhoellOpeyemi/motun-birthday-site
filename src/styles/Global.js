import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      width: 90%;
      max-width: 900px;
      margin: 0 auto;
      background-color: #fdfdfd;
      color: #222;
    }
`;

export default GlobalStyles;
