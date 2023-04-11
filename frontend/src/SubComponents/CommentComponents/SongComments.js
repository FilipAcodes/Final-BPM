import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import AllComments from "./AllComments";

const SongComments = ({ reload }) => {
  const [getComments, setGetComments] = useState(null);
  const { songId } = useParams();

  useEffect(() => {
    fetch(`/comments/${songId}`)
      .then((res) => res.json())
      .then((data) => setGetComments(data.data));
  }, [reload]);

  return (
    <StyledCommentContainer>
      <h2>Comments:</h2>
      {getComments &&
        getComments.comments.map((comment, i) => {
          return (
            <AllComments key={i} by={comment._id} comment={comment.comment} />
          );
        })}
    </StyledCommentContainer>
  );
};

export default SongComments;

const StyledCommentContainer = styled.div`
  border: 2px solid #9d00ff;
  border-radius: 8px;
  padding-left: 5px;
  overflow: auto;

  @media (min-width: 1571px) {
    position: absolute;
    top: 35%;
    left: 44%;
    width: 500px;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 375px) {
    width: 275px;
    height: 250px;
    margin-left: 10px;
    margin-top: 5px;
  }
  @media (max-width: 1450px) and (min-width: 1251px) {
    position: absolute;
    top: 35%;
    left: 44%;
    transform: translate(-50%, -50%);
    width: 400px;
  }
  @media (max-width: 1570px) and (min-width: 1451px) {
    width: 400px;
    position: absolute;
    top: 35%;
    left: 44%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 1250px) and (min-width: 376px) {
    position: absolute;
    top: 66%;
    left: 45%;
    width: 50%;
    height: 30%;
  }
`;
