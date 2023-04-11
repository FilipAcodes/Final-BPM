import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import styled from "styled-components";
import ToastNotification from "../ToastNotification";

const CreatePlaylistButton = () => {
  const [playlistName, setPlaylistName] = useState("");
  const { user } = useAuth0();
  const [show, setShow] = useState(false);

  const createPlaylist = (e) => {
    setPlaylistName(e.target.value);
  };

  const submitAndCreate = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, playlist: playlistName }),
    };
    fetch("/addplaylist", options)
      .then((response) => response.json())
      .then((data) => {
        setPlaylistName("");
        setShow(true);
      });
  };

  return (
    <>
      <h3>Or create a Playlist: </h3>
      <form onSubmit={submitAndCreate}>
        <input value={playlistName} onChange={createPlaylist}></input>
        <CreatePlaylistButtons type="submit">
          Create a playlist
        </CreatePlaylistButtons>
      </form>
      <ToastNotification
        message="Playlist Created!"
        setShow={setShow}
        show={show}
      />
    </>
  );
};

export default CreatePlaylistButton;
const CreatePlaylistButtons = styled.button`
  color: white;
  border: 2px solid white;
  border-radius: 5px;
`;
