import React from "react";
import Head from "next/head";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import { globalCSS } from "./styled/globalCSS";
import { theme } from "./styled/theme";

const GlobalStyles = createGlobalStyle`
  ${globalCSS};
`;

function Layout(props) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <Head>
        <title>{props.pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>{props.children}</Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  max-width: 100%;
`;

export default Layout;
