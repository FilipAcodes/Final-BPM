import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ArtistSpecificInfo = ({ title, id, album }) => {
  const navigate = useNavigate();

  return (
    <StyledButtonContainer onClick={() => navigate(`/search/${id}`)}>
      {title}
      <AlbumImage
        src={album.cover_small}
        alt="albumcover"
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/album/${album.id}`);
        }}
      ></AlbumImage>
    </StyledButtonContainer>
  );
};

export default ArtistSpecificInfo;

const StyledButtonContainer = styled.button`
  color: white;
  display: flex;
  border: 1px solid #9d00ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  padding: 3px;
  margin-bottom: 5px;
  margin-right: 15px;
  margin-left: 15px;

  position: relative;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #9d00ff;
    border: 1px solid white;
  }
`;

const AlbumImage = styled.img`
  width: 60px;
`;
