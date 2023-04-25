import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserSelectedPlaylist from "./UserSelectedPlaylist";
import PageLoad from "../../PageLoad";

const UserPlaylist = () => {
  const { user } = useAuth0();
  const [userPlaylist, setUserPlaylist] = useState(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [loading, setLoading] = useState(true);

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
  }, [user]);

  if (loading) return <PageLoad />;

  return (
    <>
      <Title>Your Playlist:</Title>
      <OptionsForPlaylist
        id="playlist"
        onChange={(e) => setSelectedPlaylist(e.target.value)}
        defaultValue=""
      >
        <option selected defaultValue="" key="default" disabled>
          Select a playlist!
        </option>
        {userPlaylist.playlists.map((e, i) => {
          return (
            <option key={i} value={e.playlistname}>
              {e.playlistname}
            </option>
          );
        })}
      </OptionsForPlaylist>
      <UserSelectedPlaylist
        selectedplaylist={selectedPlaylist}
        userPlaylist={userPlaylist.playlists}
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
