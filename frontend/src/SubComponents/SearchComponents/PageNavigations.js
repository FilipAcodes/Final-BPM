import React from "react";
import styled from "styled-components";

const PageNavigations = ({
  pageNum,
  setPageNum,
  resultsPerPage,
  search,
  getPageResults,
}) => {
  const goToPage = (pageNumber) => {
    setPageNum(pageNumber);
  };
  const hasPrevPage = () => {
    return pageNum > 1;
  };
  const hasNextPage = () => {
    return search && search.length > pageNum * resultsPerPage;
  };

  return (
    <PageNavigation>
      {hasPrevPage() && (
        <PageButton onClick={() => goToPage(pageNum - 1)}>Prev</PageButton>
      )}
      {getPageResults().length > 0 && <PageButton active>{pageNum}</PageButton>}
      {hasNextPage() && (
        <PageButton onClick={() => goToPage(pageNum + 1)}>Next</PageButton>
      )}
    </PageNavigation>
  );
};

export default PageNavigations;

const PageNavigation = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 93%;
  left: 50%;
`;

const PageButton = styled.button`
  background-color: black;
  border: 1px solid #9d00ff;
  color: #9d00ff;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
  padding: 8px 16px;
  border-radius: 8px;
  &:hover {
    color: #ffffff;
  }
`;
