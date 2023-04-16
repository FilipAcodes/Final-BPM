import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CreatePlaylistButton from "./CreatePlaylistButton";
import { useAuth0 } from "@auth0/auth0-react";
import AddSongToPlaylist from "./AddSongToPlaylist";

const Modal = ({ isOpen, onClose, id, songname, artist, picture }) => {
  const { user } = useAuth0();
  const [userPlaylist, setUserPlaylist] = useState(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const closeModal = () => {
    onClose(false);
    setSelectedPlaylist(null);
  };

  const fetchPlaylist = () => {
    if (user) {
      fetch(`/userplaylists/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            setUserPlaylist(data.data);
          }
        });
    }
  };

  useEffect(() => {
    fetchPlaylist();
  }, []);

  return (
    <>
      {isOpen && (
        <Overlay>
          <ModalWrapper>
            <CloseButton onClick={closeModal}>X</CloseButton>
            <ModalContent>
              <h2>Add to Playlist</h2>
              <label>Choose a playlist to add it to : </label>
              <select
                id="playlist"
                onClick={fetchPlaylist}
                onChange={(e) => setSelectedPlaylist(e.target.value)}
              >
                <option defaultValue disabled selected>
                  Select a playlist!
                </option>
                {userPlaylist &&
                  userPlaylist.playlists.map((e, i) => {
                    return (
                      <option key={i} value={e.playlistname}>
                        {e.playlistname}
                      </option>
                    );
                  })}
              </select>
              {selectedPlaylist && (
                <>
                  <h3>
                    Add {songname} to : {selectedPlaylist}
                  </h3>
                  <AddSongToPlaylist
                    id={id}
                    songname={songname}
                    artist={artist}
                    picture={picture}
                    playlist={selectedPlaylist}
                    email={user.email}
                    closeModal={onClose}
                  />
                </>
              )}
              <CreatePlaylistButton />
            </ModalContent>
          </ModalWrapper>
        </Overlay>
      )}
    </>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  border-radius: 10px;
  border: 2px solid #9d00ff;
  padding: 20px;
`;

const ModalContent = styled.div``;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  border: none;
  background-color: transparent;
  font-size: 15px;
  color: white;
  cursor: pointer;
`;
