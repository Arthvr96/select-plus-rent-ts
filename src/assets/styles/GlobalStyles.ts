import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  ul, ol {
    list-style: none;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-size: 1.6rem;
    overflow-x: hidden;
    
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Lato", serif;
    font-weight: 700;
    line-height: 1.2;
    margin: 0;
    padding: 0;
  }

  p, li, a, span {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    line-height: 1.5;
    font-size: 1.8rem;
    margin: 0;
    padding: 0;
  }
`;
