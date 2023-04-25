import React from "react";
import Loading from "./components/Loading";
import styled from "styled-components";

const PageLoad = () => {
  return (
    <LoadContainer>
      <Loading />
    </LoadContainer>
  );
};

export default PageLoad;

const LoadContainer = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
