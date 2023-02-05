import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --moderate-blue: #5457b6;
    --soft-red: #ed6468;
    --light-grayish-blue: #c3c4ef;
    --pale-red: #ffb8bb;

    --dark-blue: #324152;
    --grayish-blue: #67727e;
    --light-gray: #eaecf1;
    --very-light-gray: #f5f6fa;
    --white: #ffffff;

    --background: var(--very-light-gray);
    --text: var(--dark-blue);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body {
    min-height: 100vh;
  }

  body {
    background-color: var(--background);
    color: var(--text);

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body, input, textarea, button {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
  }
`;
