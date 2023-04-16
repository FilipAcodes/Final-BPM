import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserSelectedPlaylist from "./UserSelectedPlaylist";
import Loading from "../../components/Loading";

const UserPlaylist = () => {
  const { user } = useAuth0();
  const [reload, setReload] = useState(true);
  const [userPlaylist, setUserPlaylist] = useState(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      fetch(`/userplaylists/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            setUserPlaylist(data.data);
            setLoading(false);
          }
        });
    }
  }, [reload]);
  //Annoying WEE being first when reloading..
  return (
    <>
      <Title>Your Playlist:</Title>
      <OptionsForPlaylist
        id="playlist"
        onClick={() => {
          setLoading(true);
          setReload(!reload);
        }}
        onChange={(e) => setSelectedPlaylist(e.target.value)}
      >
        <option defaultValue disabled>
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
      </OptionsForPlaylist>
      <UserSelectedPlaylist
        selectedplaylist={selectedPlaylist}
        userPlaylist={userPlaylist?.playlists}
      />
    </>
  );
};

export default UserPlaylist;

const Title = styled.h1`
  text-align: center;
  color: white;
  position: absolute;
  top: 9%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  @media (max-width: 375px) {
    width: 300px;
    font-size: 25px;
  }
  @media (max-width: 632px) and (min-width: 376px) {
    font-size: 35px;
  }
`;

const OptionsForPlaylist = styled.select`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
  @media (max-width: 375px) {
    top: 15%;
    width: 121px;
  }
`;
