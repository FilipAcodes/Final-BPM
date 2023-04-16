import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillLike } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import ToastNotification from "../ToastNotification";

const LikeButton = ({ songname, picture, artist }) => {
  const { user } = useAuth0();
  const { songId } = useParams();
  const [likedSong, setLikedSong] = useState(false);
  const [reload, setReload] = useState(true);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    setLikedSong(false);
    fetch(`/songinfo/${songId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 404) {
          setLikedSong(false);
        } else {
          setLikedSong(true);
        }
      });
  }, [reload, songId]);
  //Same deal with the removal of red
  const addToLikeList = () => {
    if (!user) {
      return setSignedIn(true);
    } else {
      setSignedIn(false);
      fetch("/likesong", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          songid: songId,
          songname: songname,
          picture: picture,
          artist: artist,
        }),
      })
        .then((response) => {
          response.json();
        })
        .then(() => setReload(!reload))
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <AddToLikedButton onClick={() => addToLikeList()}>
      <ToastNotification
        message="Please log-in to like the song"
        show={signedIn}
        setShow={setSignedIn}
      />
      <StyledLikeButton likedsong={likedSong ? "true" : ""} />
    </AddToLikedButton>
  );
};

export default LikeButton;

const AddToLikedButton = styled.button`
  margin-left: 15px;
`;

const StyledLikeButton = styled(AiFillLike)`
  color: ${({ likedsong }) => (likedsong ? "#9d00ff" : "white")};
  font-size: 30px;
`;
