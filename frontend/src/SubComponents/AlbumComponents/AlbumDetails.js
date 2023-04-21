import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AlbumDetails = ({ songid, title }) => {
  const navigate = useNavigate();
  return (
    <ButtonNavForSong onClick={() => navigate(`/search/${songid}`)}>
      {title}
    </ButtonNavForSong>
  );
};

export default AlbumDetails;

const ButtonNavForSong = styled.button`
  color: white;
  font-size: 15px;
  padding: 5px;
  border: 2px solid #9d00ff;
  border-radius: 8px;
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  margin-left: 5px;
  margin-right: 5px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #9d00ff;
    border: 2px solid white;
    color: black;
    transform: scale(1.03);
  }
`;
