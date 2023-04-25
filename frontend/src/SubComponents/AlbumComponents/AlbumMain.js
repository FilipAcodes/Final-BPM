import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumDetails from "./AlbumDetails";
import styled from "styled-components";
import PageLoad from "../../PageLoad";

const AlbumMain = () => {
  const { albumId } = useParams();
  const [albumInfo, setalbumInfo] = useState(null);
  const [getAlbumInfo, setgetAlbumInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/deezerapi/album/${albumId}`)
      .then((res) => res.json())
      .then((data) => {
        setalbumInfo(data.data);
        return fetch(`/deezerapi/search/${data.data[0].title}`);
      })
      .then((res) => res.json())
      .then((data) => {
        setgetAlbumInfo(data.data.data[0]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <PageLoad />;
  }

  return (
    <StyledContainer>
      <ContainerImageTracks>
        <ArtistName>{getAlbumInfo.artist.name}</ArtistName>
        <AlbumTitle>{getAlbumInfo.album.title}</AlbumTitle>
        <img src={getAlbumInfo.album.cover_medium} alt="album"></img>
      </ContainerImageTracks>
      <TrackContainer>
        <AlbumTitle>Album Tracks :</AlbumTitle>
        <TrackPlacementContainer>
          {albumInfo.map((e) => {
            return <AlbumDetails key={e.id} songid={e.id} title={e.title} />;
          })}
        </TrackPlacementContainer>
      </TrackContainer>
    </StyledContainer>
  );
};

export default AlbumMain;

const StyledContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  color: white;
  border: 2px solid #9d00ff;
  border-radius: 8px;
  width: 60%;
  height: 60%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 375px) {
    height: 600px;
    width: 290px;
    left: 56%;
    grid-template-columns: 1fr;
  }
  @media (max-width: 966px) and (min-width: 376px) {
    height: 700px;
    grid-template-columns: 1fr;
  }
`;

const ContainerImageTracks = styled.div`
  img {
    width: 100%;
    height: 60%;
    object-fit: contain;
    @media (max-width: 966px) and (min-width: 376px) {
      height: 250px;
    }
    @media (max-width: 375px) {
      height: 150px;
    }
  }
`;

const TrackContainer = styled.div`
  overflow: auto;
  margin-top: 5px;
  height: 500px;
`;

const ArtistName = styled.h1`
  text-align: center;
  font-size: 35px;
  margin-top: 5px;
  @media (max-width: 375px) {
    font-size: 25px;
  }
`;

const AlbumTitle = styled.h2`
  text-align: center;
  @media (max-width: 375px) {
    font-size: 15px;
  }
`;

const TrackPlacementContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1035px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 375px) {
    height: 384px;
    overflow: auto;
  }
`;
