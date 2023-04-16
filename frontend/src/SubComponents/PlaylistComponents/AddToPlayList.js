import React, { useState } from "react";
import styled from "styled-components";
import { MdPlaylistAdd } from "react-icons/md";
import PlaylistModal from "./PlaylistModal";
import { useAuth0 } from "@auth0/auth0-react";
import ToastNotification from "../ToastNotification";

const AddToPlayList = ({ id, songname, artist, picture }) => {
  const [openModal, setOpenModal] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  const { user } = useAuth0();

  const modalOpen = () => {
    if (!user) {
      return setSignedIn(true);
    }
    setSignedIn(false);
    setOpenModal(true);
  };

  return (
    <>
      <AddToPlayListButton onClick={modalOpen}>
        <StyledPlayListButton />
      </AddToPlayListButton>
      <ToastNotification
        message="Please log-in to access playlist options"
        show={signedIn}
        setShow={setSignedIn}
      />
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
