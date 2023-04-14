import React from "react";
import BackgroundImage from "../SubComponents/BackgroundImage";
import AlbumPageBg from "../Images/AlbumPageBg.jpg";
import AlbumMain from "../SubComponents/AlbumComponents/AlbumMain";

const AlbumPage = () => {
  return (
    <>
      <BackgroundImage imageURL={AlbumPageBg} />
      <AlbumMain />
    </>
  );
};

export default AlbumPage;
