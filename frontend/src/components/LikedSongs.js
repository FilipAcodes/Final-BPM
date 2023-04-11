import React from "react";
import BackgroundImage from "../SubComponents/BackgroundImage";
import LikedSongBg from "../Images/LikedSongsBg.jpg";
import LikedSongInformation from "../SubComponents/LikedSongComponents/LikedSongInformation";

const LikedSongs = () => {
  return (
    <>
      <BackgroundImage imageURL={LikedSongBg} />
      <LikedSongInformation />
    </>
  );
};

export default LikedSongs;
