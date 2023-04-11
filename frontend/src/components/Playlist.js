import React from "react";
import BackgroundImage from "../SubComponents/BackgroundImage";
import PlaylistBg from "../Images/PlaylistBg.jpg";
import UserPlaylist from "../SubComponents/PlaylistComponents/UserPlaylist";

const Playlist = () => {
  return (
    <>
      <BackgroundImage imageURL={PlaylistBg} />
      <UserPlaylist />
    </>
  );
};

export default Playlist;
