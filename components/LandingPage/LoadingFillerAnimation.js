import React from "react";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops.cjs";
import * as easings from "d3-ease";

function LoadingFillerAnimation(props) {
  return (
    <Spring
      from={{ value: 0, opacity: 1 }}
      to={{ value: 1, opacity: 0 }}
      config={{ duration: 6000, easing: easings.easeQuad }}
    >
      {props => (
        <LoadingFiller percentage={Math.round(props.value * 100)}>
          <h1 style={props}>{Math.round(props.value * 100)}/100</h1>
        </LoadingFiller>
      )}
    </Spring>
  );
}

const LoadingFiller = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 100%;
  height: 100vh;
  width: ${props => `${props.percentage}%`};
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.red};

  h1 {
    margin: 100px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default LoadingFillerAnimation;
