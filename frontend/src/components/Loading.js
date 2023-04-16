import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styled, { keyframes } from "styled-components";

const Loading = () => {
  return <RotatingLoad />;
};

export default Loading;

const RotatingLoad = styled(AiOutlineLoading3Quarters)`
  animation: ${keyframes`
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  `} 1s linear infinite;
`;
