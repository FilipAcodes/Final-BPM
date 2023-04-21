import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SongComments from "../CommentComponents/SongComments";
import ToastNotification from "../ToastNotification";

const SongAddComment = () => {
  const { songId } = useParams();
  const [addComment, setAddComment] = useState("");
  const [reload, setReload] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const { user } = useAuth0();

  const userInput = (e) => {
    setAddComment(e.target.value);
  };

  const submitButton = (e) => {
    e.preventDefault();
    if (!user) {
      return setSignedIn(true);
    } else {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          comment: addComment,
          songid: songId,
        }),
      };
      fetch("/comments/create", options)
        .then((response) => response.json())
        .then((data) => {
          setAddComment("");
          setReload(!reload);
        });
    }
  };
  return (
    <>
      <CommentContainer>
        <form>
          <StyledTextArea
            value={addComment}
            onChange={(e) => userInput(e)}
          ></StyledTextArea>
        </form>
        <SubmitButton
          type="submit"
          onClick={(e) => submitButton(e)}
          disabled={addComment.length < 3}
        >
          Submit
        </SubmitButton>
      </CommentContainer>
      <div>
        <SongComments reload={reload} />
      </div>
      <ToastNotification
        message="Please log-in to submit your message"
        show={signedIn}
        setShow={setSignedIn}
      />
    </>
  );
};

export default SongAddComment;

const CommentContainer = styled.div`
  margin-left: 15px;
`;

const SubmitButton = styled.button`
  color: #9d00ff;
  border: 2px solid #9d00ff;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    color: aqua;
    background-color: white;
  }
  &:disabled {
    color: grey;
    cursor: not-allowed;
  }
`;

const StyledTextArea = styled.textarea`
  max-width: 385px;
  max-height: 330px;
  @media (max-width: 375px) {
    height: 100px;
    width: 100px;
    resize: none;
  }
`;
