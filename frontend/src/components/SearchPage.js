import React from "react";
import Searchbar from "../SubComponents/SearchComponents/SearchBar";
import BackgroundImage from "../SubComponents/BackgroundImage";
import SearchBg from "../Images/SearchBg.jpg";

const SearchPage = () => {
  return (
    <>
      <BackgroundImage imageURL={SearchBg} />
      <Searchbar />;
    </>
  );
};

export default SearchPage;
