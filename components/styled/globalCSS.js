import { css } from "styled-components";

export const globalCSS = css`
  @import url("https://fonts.googleapis.com/css?family=Cormorant+SC:300,400&display=swap");

  ::selection {
    background: ${({ theme }) => theme.colors.tan};
    colors: ${({ theme }) => theme.colors.black};
  }

  ::-webkit-scrollbar {
    width: 1em;
    z-index: 95;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.5);
  }

  html {
    font-size: 10px;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.pink};
    font-family: ${({ theme }) => theme.fonts.header};
    overflow-x: hidden;
  }

  h1 {
    font-size: 6rem;
    font-weight: 300;
    font-family: ${({ theme }) => theme.fonts.header};
  }
`;
