import React from "react";
import styled from "styled-components";
import AudioPlayer from "./AudioPlayer";
import SongAddComment from "../CommentComponents/SongAddComment";
import LikeButton from "../LikedSongComponents/LikeButton";
import AddToPlayList from "../PlaylistComponents/AddToPlayList";

const DetailsForSong = ({ songName, artist, album, mp3, explicit, id }) => {
  return (
    <>
      <StyledContainer>
        <LeftColumn>
          <div>
            <SongName>{songName}</SongName>
            <ArtistMoreInfo>
              <ArtistImage src={artist.picture} alt="Artist" />
            </ArtistMoreInfo>
            <StyledContainerForLikePlayList>
              <LikeButton
                songname={songName}
                picture={artist.picture}
                artist={artist.name}
              />
              <AddToPlayList
                id={id}
                songname={songName}
                artist={artist.name}
                picture={artist.picture}
              />
            </StyledContainerForLikePlayList>
            <SongAddComment />
          </div>
        </LeftColumn>
        <RightColumn>
          <AlbumAndPlayerContainer>
            <AlbumTitle>{album.title}</AlbumTitle>
            <AlbumImage src={album.cover_xl} alt="Album Cover"></AlbumImage>
            <AudioPlayer mp3={mp3} width={`90%`} />
            {explicit && <ExplicitBold>EXPLICIT</ExplicitBold>}
          </AlbumAndPlayerContainer>
        </RightColumn>
      </StyledContainer>
    </>
  );
};

export default DetailsForSong;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  border-radius: 8px;
  height: 80vh;
  width: 90vw;
  border: 2px solid #9d00ff;
  color: white;
  @media (max-width: 375px) {
    height: 600px;
    width: 300px;
    left: 56%;
  }
  @media (max-width: 1250px) and (min-width: 376px) {
    left: 52%;
    width: 78vw;
  }
`;

const SongName = styled.h1`
  font-size: 45px;
  margin-left: 15px;
  @media (max-width: 375px) {
    font-size: 25px;
    width: 136px;
    height: 69px;
    overflow: scroll;
  }
`;

const AlbumAndPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`;

const AlbumImage = styled.img`
  max-width: 90%;
`;

const LeftColumn = styled.div`
  margin-top: 15px;
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  @media (max-width: 375px) {
    grid-template-columns: 1fr;
  }
`;

const RightColumn = styled.div`
  width: 40%;
  @media (max-width: 375px) {
    height: 150px;
    margin-top: 13px;
  }
`;

const AlbumTitle = styled.h3`
  font-size: 35px;
  @media (max-width: 375px) {
    font-size: 25px;
    height: 75px;
    width: 109px;
    overflow: scroll;
  }
`;

const ArtistMoreInfo = styled.button`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 5px;
  border: 2px solid #9d00ff;
  border-radius: 50%;
  color: #9d00ff;
  margin-left: 15px;
  @media (max-width: 375px) {
    height: 70px;
    width: 70px;
  }
`;

const ArtistImage = styled.img`
  border-radius: 50%;
`;

const StyledContainerForLikePlayList = styled.div`
  margin-top: 5px;
`;

const ExplicitBold = styled.p`
  font-weight: bold;
  margin-top: 2px;
`;
