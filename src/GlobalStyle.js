import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    & {
      --Blue: hsl(223, 87%, 63%);
      --Pale-Blue: hsl(223, 100%, 88%);
      --Light-Red: hsl(354, 100%, 66%);
      --Gray: hsl(0, 0%, 59%);
      --Very-Dark-Blue: hsl(209, 33%, 12%);
    }
  }

  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    font-family: "Libre Franklin", sans-serif;
    display: flex;
    justify-content: center;
    background-color: hsl(0, 0%, 100%);
  }
`;

export default GlobalStyle;
