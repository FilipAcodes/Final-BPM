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
      .then((data) => setGetComments(data.data))
      .catch((er) => {
        if (er) {
          console.error(er);
        }
      });
  }, [reload]);
  //Remove the console on browser, error handled arleady.
  return (
    <StyledCommentContainer>
      <h2>Comments:</h2>
      {getComments ? (
        getComments.comments.map((comment, i) => {
          return (
            <AllComments key={i} by={comment._id} comment={comment.comment} />
          );
        })
      ) : (
        <p>Be the first one to comment!</p>
      )}
    </StyledCommentContainer>
  );
};

export default SongComments;

const StyledCommentContainer = styled.div`
  border: 2px solid #9d00ff;
  border-radius: 8px;
  padding-left: 5px;
  overflow: auto;
  margin-left: 10px;
  margin-top: 5px;
  @media (min-width: 1571px) {
    position: absolute;
    top: 7%;
    left: 42%;
    width: 500px;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 375px) {
    width: 275px;
    height: 250px;
    margin-left: 10px;
    margin-top: 5px;
  }
  @media (max-width: 1450px) and (min-width: 1381px) {
    position: absolute;
    top: 7%;
    left: 42%;
    transform: translate(-50%, -50%);
    width: 400px;
  }
  @media (max-width: 1570px) and (min-width: 1451px) {
    width: 400px;
    position: absolute;
    top: 7%;
    left: 42%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 1380px) and (min-width: 1340px) {
    position: absolute;
    top: 4%;
    left: 28%;
    width: 380px;
  }
  @media (max-width: 1339px) and (min-width: 376x) {
    position: absolute;
    top: 4%;
    left: 28%;
    width: 900px;
  }
`;
