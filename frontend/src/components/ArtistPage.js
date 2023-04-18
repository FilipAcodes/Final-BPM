import React from "react";
import BackgroundImage from "../SubComponents/BackgroundImage";
import Artistbg from "../Images/ArtistPageBg.jpg";
import ArtistMain from "../SubComponents/ArtistComponents/ArtistMain";

const ArtistPage = () => {
  return (
    <>
      <BackgroundImage imageURL={Artistbg} />
      <ArtistMain />
    </>
  );
};

export default ArtistPage;
