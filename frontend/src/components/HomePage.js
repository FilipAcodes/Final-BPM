import React from "react";
import BackGround from "../Images/BackgroundPicture.jpg";
import BackgroundImage from "../SubComponents/BackgroundImage";
import LandingMessage from "../SubComponents/HomePageComponents/LandingMessage";
//potato
//tomato
const HomePage = () => {
  return (
    <>
      <BackgroundImage imageURL={BackGround} />
      <LandingMessage />
    </>
  );
};

export default HomePage;
