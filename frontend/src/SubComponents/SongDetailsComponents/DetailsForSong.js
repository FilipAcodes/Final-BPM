import React, { useState } from "react";
import styled from "styled-components";
import AudioPlayer from "./AudioPlayer";
import SongAddComment from "../CommentComponents/SongAddComment";
import LikeButton from "../LikedSongComponents/LikeButton";
import AddToPlayList from "../PlaylistComponents/AddToPlayList";
import { useNavigate } from "react-router-dom";
import SongComments from "../CommentComponents/SongComments";

const DetailsForSong = ({
  songName,
  artist,
  album,
  mp3,
  explicit,
  id,
  artistid,
  albumid,
}) => {
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <StyledContainer>
        <LeftColumn>
          <div>
            <SongName>{songName}</SongName>
            <ArtistMoreInfo onClick={() => navigate(`/artist/${artistid}`)}>
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
            <SongAddComment setReload={setReload} />
          </div>
          <SongComments reload={reload} />
        </LeftColumn>
        <RightColumn>
          <AlbumAndPlayerContainer>
            <AlbumTitle>{album.title}</AlbumTitle>
            <AlbumImage
              src={album.cover_big}
              alt="Album Cover"
              onClick={() => navigate(`/album/${albumid}`)}
            ></AlbumImage>
            <AudioPlayer mp3={mp3} width={`70%`} />
            {explicit ? <ExplicitBold>EXPLICIT</ExplicitBold> : <></>}
          </AlbumAndPlayerContainer>
        </RightColumn>
      </StyledContainer>
    </>
  );
};

export default DetailsForSong;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  @media (max-width: 1130px) and (min-width: 376px) {
    grid-template-columns: 1fr;
    font-size: 30px;
  }
`;

const AlbumAndPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AlbumImage = styled.img`
  width: 70%;
  &:hover {
    cursor: pointer;
  }
`;

const LeftColumn = styled.div`
  margin-top: 15px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 375px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 1130px) and (min-width: 376px) {
    grid-template-columns: 1fr;
  }
`;

const RightColumn = styled.div`
  width: 100%;
  margin-right: 10px;
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
  @media (max-width: 1130px) and (min-width: 376px) {
    font-size: 30px;
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
