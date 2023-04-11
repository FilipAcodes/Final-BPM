import React from "react";
import styled from "styled-components";
import { useState } from "react";
import SearchResults from "./SearchResults";
import PageNavigations from "./PageNavigations";

const SearchBar = () => {
  const [input, setInput] = useState(null);
  const [search, setSearch] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const resultsPerPage = 15;

  const onClick = (e) => {
    e.preventDefault();
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8327104a61msh2959623d75f0426p15fb85jsnd2a851dace1e",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${input}`, options)
      .then((response) => response.json())
      .then((response) => setSearch(response.data))
      .catch((err) => console.error(err));
  };

  const getPageResults = () => {
    if (!search) {
      return [];
    }
    const start = (pageNum - 1) * resultsPerPage;
    const end = start + resultsPerPage;
    return search.slice(start, end);
  };

  return (
    <>
      <SearchContainer>
        <InputContainer>
          <InputField
            onChange={(e) => setInput(e.target.value)}
            placeholder="Song,Artist or Album"
          ></InputField>
          <SubmitButton type="submit" onClick={onClick}>
            Search
          </SubmitButton>
        </InputContainer>
      </SearchContainer>
      <SearchResultsContainer>
        {search &&
          getPageResults().map((e) => {
            return (
              <SearchResults
                key={e.id}
                title={e.title}
                artist={e.artist}
                id={e.id}
              />
            );
          })}
      </SearchResultsContainer>
      <PageNavigations
        search={search}
        pageNum={pageNum}
        setPageNum={setPageNum}
        resultsPerPage={resultsPerPage}
        getPageResults={getPageResults}
      />
    </>
  );
};

export default SearchBar;
const InputContainer = styled.form`
  display: flex;
  align-items: center;
  @media (max-width: 375px) {
    margin-left: 35px;
  }
`;

const InputField = styled.input`
  height: 38px;
  padding: 10px;
  border-radius: 5px;
  width: 500px;
  border: 1px solid #ccc;
  @media (max-width: 375px) {
    width: 191px;
    height: 38px;
  }
`;

const SubmitButton = styled.button`
  height: 40px;
  padding: 0 20px;
  background-color: black;
  border: 1px solid #9d00ff;
  border-radius: 5px;
  color: #9d00ff;
  font-size: 16px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SearchResultsContainer = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  @media (max-width: 375px) {
    grid-template-columns: 1fr 1fr;
    overflow: auto;
    height: 500px;
    width: 300px;
    margin-left: 20px;
    margin-top: -5px;
  }
`;
