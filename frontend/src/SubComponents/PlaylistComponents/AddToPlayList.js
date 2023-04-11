import React, { useState } from "react";
import styled from "styled-components";
import { MdPlaylistAdd } from "react-icons/md";
import PlaylistModal from "./PlaylistModal";

const AddToPlayList = ({ id, songname, artist, picture }) => {
  const [openModal, setOpenModal] = useState(false);

  const modalOpen = () => {
    setOpenModal(true);
  };

  return (
    <>
      <AddToPlayListButton onClick={modalOpen}>
        <StyledPlayListButton />
      </AddToPlayListButton>
      <PlaylistModal
        isOpen={openModal}
        onClose={setOpenModal}
        id={id}
        songname={songname}
        artist={artist}
        picture={picture}
      ></PlaylistModal>
    </>
  );
};

export default AddToPlayList;

const AddToPlayListButton = styled.button`
  margin-left: 15px;
`;

const StyledPlayListButton = styled(MdPlaylistAdd)`
  color: white;
  font-size: 30px;
  margin-top: 5px;
`;
