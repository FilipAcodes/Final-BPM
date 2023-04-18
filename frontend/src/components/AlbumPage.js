import React from "react";
import BackgroundImage from "../SubComponents/BackgroundImage";
import Albumbg from "../Images/AlbumPageBg.jpg";
import AlbumMain from "../SubComponents/AlbumComponents/AlbumMain";

const AlbumPage = () => {
  return (
    <>
      <BackgroundImage imageURL={Albumbg} />
      <AlbumMain />
    </>
  );
};

export default AlbumPage;
