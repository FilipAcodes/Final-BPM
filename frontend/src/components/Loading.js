import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styled, { keyframes } from "styled-components";

const Loading = () => {
  return <RotatingLoad />;
};

export default Loading;

const RotatingLoad = styled(AiOutlineLoading3Quarters)`
  height: 100%;
  width: 100%;
  color: #9d00ff;
  animation: ${keyframes`
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  `} 1s linear infinite;
`;
