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
      .catch((er) => {});
  }, [reload]);

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
  width: 100%;
  height: 80%;
`;
