import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchResults = ({ title, artist, id }) => {
  const navigate = useNavigate();

  return (
    <SongContainer onClick={() => navigate(`/search/${id}`)}>
      <SongTitle>
        {title.length > 12 ? title.slice(0, 9) + "..." : title}
      </SongTitle>
      <ArtistName>
        {artist.name.length > 15
          ? artist.name.slice(0, 15) + "..."
          : artist.name}
      </ArtistName>
      <ArtistPicture src={artist.picture} />
    </SongContainer>
  );
};

export default SearchResults;

const SongContainer = styled.button`
  width: 14vw;
  height: 24vh;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 1px 1px 13px 5px rgba(0, 0, 0, 0.56);
  margin-left: 5px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media (max-width: 1150px) {
    height: 20vh;
  }
  @media (max-width: 375px) {
    width: 35vw;
  }
`;

const ArtistName = styled.p`
  margin-bottom: 5px;
  margin-top: 5px;
  font-size: 15px;
  @media (max-width: 1150px) {
    font-size: 13px;
  }
  text-overflow: ellipsis;
`;
const SongTitle = styled.h2`
  font-size: 29px;
  text-overflow: ellipsis;
  @media (max-width: 1150px) {
    font-size: 24px;
  }
  @media (max-width: 770px) {
    font-size: 20px;
  }
`;

const ArtistPicture = styled.img`
  height: 55%;
  width: 55%;
  position: absolute;
  object-fit: cover;
  top: 66%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 1150px) {
    height: 35%;
    width: 35%;
    top: 70%;
    left: 50%;
  }
  @media (max-width: 770px) {
    top: 75%;
  }
`;
