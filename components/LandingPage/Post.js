import React from "react";
import styled from "styled-components";

function Post(props) {
  return (
    <Container opacity={props.opacity}>
      <h2>{props.number}</h2>
      <BlogInfo>
        <img src="/wallpaper.jpg" />
        <div>
          <p>
            02/18
            <br />
            2019
          </p>
          <h1>A Cruelty-Free Makeup Challenge</h1>
          <p>Author's Name</p>
        </div>
      </BlogInfo>
      <button>+</button>
    </Container>
  );
}

const Container = styled.div`
  width: calc(100% - 75px);
  padding: 0 50px;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  opacity: ${props => props.opacity};
  z-index: 10;

  h2 {
    flex: 1;
    margin: 0 50px 100px 50px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 7rem;
    font-weight: 300;
    align-self: flex-end;
  }

  button {
    flex: 1;
    background: none;
    border: none;
    padding: 100px 150px 0 0;
    font-size: 5rem;
    font-weight: 100;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transition: 0.3s;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

const BlogInfo = styled.div`
  flex: 4;
  display: flex;
  align-items: flex-end;
  padding: 5px 150px 5px 0;
  color: ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  img {
    margin-right: 50px;
    width: 250px;
    height: 300px;
  }

  h1 {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default Post;
