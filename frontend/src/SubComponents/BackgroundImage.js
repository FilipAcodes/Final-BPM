import React from "react";
import styled from "styled-components";

const BackgroundImage = ({ imageURL }) => {
  return (
    <>
      <BackGroundImage src={imageURL}></BackGroundImage>
    </>
  );
};

export default BackgroundImage;

const BackGroundImage = styled.img`
  position: fixed;
  object-fit: cover;
  width: 100%;
  height: 100%;
  @media (max-width: 375px) {
    overflow-x: hidden;
  }
`;
