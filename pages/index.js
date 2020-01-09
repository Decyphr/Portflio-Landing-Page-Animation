import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import LoadingFillerAnimation from "../components/LandingPage/LoadingFillerAnimation";
import { Spring } from "react-spring/renderprops.cjs";
import BlogPosts from "../components/LandingPage/BlogPosts";

function Home() {
  return (
    <Layout pageTitle="AVST | Design Build">
      <Container>
        <LandingPageHeader>AVST</LandingPageHeader>
        <LoadingFillerAnimation />
        <BlogPosts />
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LandingPageHeader = styled.h1`
  color: ${({ theme }) => theme.colors.red};
  font-weight: 100;
  margin: 100px;
`;

export default Home;
