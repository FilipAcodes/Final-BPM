import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LandingMessage = () => {
  const navigate = useNavigate();

  return (
    <>
      <StyledContainer>
        <InitialText>
          Welcome to BPM&nbsp;the
          <br /> world's best musical engine!
        </InitialText>
      </StyledContainer>
      <InitialNavigationButton onClick={() => navigate("/search")}>
        Get started!
      </InitialNavigationButton>
    </>
  );
};

export default LandingMessage;

const StyledContainer = styled.div`
  color: white;
  overflow: hidden;
`;

const InitialNavigationButton = styled.button`
  color: #9d00ff;
  font-size: 40px;
  border: 1px solid #9d00ff;
  background-color: black;
  border-radius: 28px;
  position: absolute;
  width: 273px;
  height: 89px;
  bottom: 30%;
  right: 50%;
  transform: translate(50%);
  animation: fadeIn 0.5s forwards;
  animation-delay: 1.5s;
  transition: all 0.3s ease-in-out;
  visibility: hidden;
  &:hover {
    color: white;
    background-color: #7f00cc;
    border: 1px solid black;
    cursor: pointer;
  }

  @media (max-width: 375px) {
    font-size: 0.875rem;
    width: 50%;
    bottom: 10%;
    right: 50%;
    transform: translate(50%);
  }
  @media (max-width: 768px) {
    font-size: 30px;
    width: 220px;
    height: 55px;
  }

  @keyframes fadeIn {
    0% {
      visibility: hidden;
      opacity: 0;
    }
    100% {
      visibility: visible;
      opacity: 1;
    }
  }
  @media (max-width: 375px) {
    font-size: 25px;
  }
`;

const InitialText = styled.h1`
  text-align: center;
  font-size: 45px;
  line-height: 1;
  width: 30%;
  position: absolute;
  opacity: 0;
  top: 30%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  animation: slideIn 1s forwards;
  animation-delay: 0.5s;
  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateY(-50%);
      visibility: hidden;
    }
    100% {
      opacity: 1;
      transform: translateY(-50%, -50%);
      visibility: visible;
    }
  }

  @media (max-width: 375px) {
    width: 250px;
    top: 30%;
    left: 54%;
  }
`;
