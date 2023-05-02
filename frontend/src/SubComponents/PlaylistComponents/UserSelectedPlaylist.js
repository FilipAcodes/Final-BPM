import React from "react";
import styled from "styled-components";
import SongInformationNav from "../SongInformationNav";

const UserSelectedPlaylist = ({ selectedplaylist, userPlaylist }) => {
  return (
    <>
      <Container>
        <StyledSongContainer>
          {selectedplaylist && (
            <StyledPlaylistFor>
              Playlist for: {selectedplaylist}
            </StyledPlaylistFor>
          )}
          {userPlaylist.map((e) => {
            if (e.playlistname === selectedplaylist) {
              return e.songs.map((usersongs) => {
                return (
                  <SongInformationNav
                    key={usersongs.Id}
                    songname={usersongs.songName}
                    picture={usersongs.picture}
                    artist={usersongs.artistName}
                    songid={usersongs.songId}
                  />
                );
              });
            }
          })}
        </StyledSongContainer>
      </Container>
    </>
  );
};

export default UserSelectedPlaylist;

const Container = styled.div`
  position: absolute;
  height: 50%;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 375px) {
    left: 46%;
  }
  @media (max-width: 1160px) and (min-width: 376px) {
    left: 57%;
    width: 500px;
  }
`;

const StyledSongContainer = styled.div`
  height: 600px;
  width: 800px;
  overflow: auto;
  @media (max-width: 375px) {
    width: 265px;
    height: 450px;
  }
  @media (max-width: 1160px) and (min-width: 376px) {
    width: 500px;
    height: 650px;
  }
`;

const StyledPlaylistFor = styled.h2`
  @media (max-width: 375px) {
    font-size: 20px;
  }
  font-size: 40px;
  @media (max-width: 632px) and (min-width: 376px) {
    font-size: 25px;
  }
`;
