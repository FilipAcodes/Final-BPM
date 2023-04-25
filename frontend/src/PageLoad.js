import React from "react";
import Loading from "./components/Loading";
import styled from "styled-components";

const PageLoad = () => {
  return (
    <div>
      <Loading />
    </div>
  );
};

export default PageLoad;

const LoadContainer = styled.div`
  width: 100%;
  height: 100%;
`;
