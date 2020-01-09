import React from "react";
import styled from "styled-components";
import Link from "next/link";

function Nav(props) {
  return (
    <Container opacity={props.opacity}>
      <h3>AVST</h3>
      <div>
        <Link href="/">
          <a>Shop</a>
        </Link>
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/">
          <a>Blog</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Contact Us</a>
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background: ${({ theme }) => theme.colors.red};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 75px);
  padding: 25px 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  opacity: ${props => props.opacity};

  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.8rem;
  }

  a {
    text-decoration: none;
    margin: 0 10px;
    padding: 5px 15px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.5rem;
    border: 2px solid transparent;
  }

  a:hover {
    border: 2px solid ${({ theme }) => theme.colors.pink};
  }

  a:focus {
    border: 2px solid ${({ theme }) => theme.colors.tan};
  }
`;

export default Nav;
