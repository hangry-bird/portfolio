// src/assets/styles/global-styles.ts
import { createGlobalStyle } from "styled-components";
// import { normalize } from "styled-normalize";

// 위에서 받은 `normalize`로 기본 css가 초기화 합니다.
const GlobalStyle = createGlobalStyle`

  html,
  body, 
  #root {
    /* overflow: hidden; */
    width: 100%;
    height: 100%;
  }

  html, body, div, button, span, label, h1, h2, h3, h4, h5{
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;