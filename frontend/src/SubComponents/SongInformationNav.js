import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SongInformationNav = ({ songname, songid, artist, picture }) => {
  const navigate = useNavigate();

  if (songname.length > 30) {
    songname = songname.slice(0, 27) + "...";
  }
  return (
    <StyledContainer>
      <StyledButtonSong onClick={() => navigate(`/search/${songid}`)}>
        <StyledSongName>{songname}</StyledSongName>
        <StyledArtistName>{artist}</StyledArtistName>
        <StyledArtistImage src={picture} alt="artist" />
      </StyledButtonSong>
    </StyledContainer>
  );
};

export default SongInformationNav;

const StyledContainer = styled.div`
  border: 2px solid #9d00ff;
  background-color: black;
  border-radius: 8px;
  margin-top: 5px;
  @media (max-width: 632px) and (min-width: 376px) {
    width: 450px;
  }
`;

const StyledButtonSong = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

const StyledSongName = styled.h2`
  width: 33%;
  font-size: 30px;
  color: white;
  @media (max-width: 375px) {
    font-size: 20px;
  }
  @media (max-width: 632px) and (min-width: 376px) {
    font-size: 25px;
  }
  @media (max-width: 1160px) and (min-width: 633px) {
    font-size: 24px;
  }
`;

const StyledArtistName = styled.p`
  width: 33%;
  font-size: 25px;
  color: white;
  @media (max-width: 375px) {
    font-size: 15px;
    text-overflow: ellipsis;
    width: 60%;
    padding-right: 2px;
  }
  @media (max-width: 632px) and (min-width: 376px) {
    width: 50%;
    font-size: 23px;
  }
  @media (max-width: 1160px) and (min-width: 633px) {
    font-size: 24px;
    width: 40%;
  }
`;

const StyledArtistImage = styled.img`
  border-radius: 50%;
  @media (max-width: 375px) {
    height: 80px;
    width: 80px;
  }
  @media (max-width: 632px) and (min-width: 376px) {
    height: 100px;
    width: 100px;
  }
  @media (max-width: 1160px) and (min-width: 376px) {
    width: 100px;
    height: 100px;
  }
`;
