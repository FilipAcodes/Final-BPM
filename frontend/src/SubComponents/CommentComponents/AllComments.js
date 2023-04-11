import React from "react";
import styled from "styled-components";

const AllComments = ({ by, comment }) => {
  return (
    <div>
      <StyledAuthor>by:{by}</StyledAuthor>
      <p>{comment}</p>
    </div>
  );
};

export default AllComments;

const StyledAuthor = styled.p`
  font-size: 0.7em;
`;
