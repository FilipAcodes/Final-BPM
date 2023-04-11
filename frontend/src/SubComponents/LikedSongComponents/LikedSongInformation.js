import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { useState } from "react";
import SongInformationNav from "../SongInformationNav";

const LikedSongInformation = () => {
  const { user } = useAuth0();
  const [songInformation, setSongInformation] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(`/alllikedsongs/${user.email}`)
        .then((res) => res.json())
        .then((data) => setSongInformation(data.data[0].likedSongs));
    }
  }, []);

  return (
    <StyledSongInformationContainer>
      <StyledTitle>Your favorited songs!</StyledTitle>
      <StyledSongContainer>
        {songInformation &&
          songInformation.map((song) => {
            return (
              <SongInformationNav
                key={song.songid}
                songid={song.songid}
                songname={song.songname}
                artist={song.artist}
                picture={song.picture}
              />
            );
          })}
      </StyledSongContainer>
    </StyledSongInformationContainer>
  );
};

export default LikedSongInformation;

const StyledSongInformationContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 375px) {
    left: 56%;
    top: 41%;
    width: 279px;
    height: 545px;
  }
  @media (max-width: 640px) and (min-width: 376px) {
    left: 56%;
  }
`;

const StyledSongContainer = styled.div`
  height: 700px;
  width: 800px;
  overflow: auto;
  @media (max-width: 375px) {
    width: 275px;
    height: 550px;
  }
  @media (max-width: 1160px) and (min-width: 376px) {
    width: 500px;
    height: 650px;
  }
  @media (max-width: 970px) and (min-width: 376px) {
  }
  @media (max-width: 640px) and (min-width: 376px) {
  }
`;

const StyledTitle = styled.h1`
  text-align: center;
`;
