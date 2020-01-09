import React from "react";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops.cjs";

import Nav from "../Nav";
import Post from "./Post";

const blogs = [1, 2, 3];

function BlogPosts(props) {
  return (
    <Container>
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={6000}>
        {props => <Nav opacity={props.opacity} />}
      </Spring>
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={6000}>
        {props =>
          blogs.map(blog => <Post number={blog} opacity={props.opacity} />)
        }
      </Spring>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 200px;
  left: 0;
`;

export default BlogPosts;
