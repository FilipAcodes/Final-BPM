import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import HomePage from "./components/HomePage";
import SideBar from "./components/SideBar";
import SearchPage from "./components/SearchPage";
import DetailedSongPage from "./components/DetailedSongPage";
import LikedSongs from "./components/LikedSongs";
import Playlist from "./components/Playlist";
import AlbumPage from "./components/AlbumPage";
import ArtistPage from "./components/ArtistPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <SideBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/likedsongs" element={<LikedSongs />} />
          <Route path="/search/:songId" element={<DetailedSongPage />} />
          <Route path="/album/:albumId" element={<AlbumPage />} />
          <Route path="/artist/:artistId" element={<ArtistPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
