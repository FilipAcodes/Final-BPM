"use strict";
const axios = require("axios");
//Single Track info get
const getTrackInfo = async (req, res) => {
  const { trackid } = req.params;
  try {
    const { data } = await axios.get(`https://api.deezer.com/track/${trackid}`);
    res.status(200).json({ status: 200, data: data, message: "Track Info" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//General query(search bar)
const getSongSearch = async (req, res) => {
  const { query } = req.params;
  try {
    const { data } = await axios.get(
      `https://api.deezer.com/search?q=${query}`
    );
    res.status(200).json({ status: 200, data: data, message: "Query Info" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//Album tracks get
const getAlbumTracks = async (req, res) => {
  const { albumid } = req.params;
  try {
    const { data } = await axios.get(
      `https://api.deezer.com/album/${albumid}/tracks`
    );
    res
      .status(200)
      .json({ status: 200, data: data.data, message: "Album Info" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//Artist tracks get
const getArtistTracks = async (req, res) => {
  const { artistid } = req.params;
  try {
    const { data } = await axios.get(
      `https://api.deezer.com/artist/${artistid}/top?limit=50`
    );
    res
      .status(200)
      .json({ status: 200, data: data.data, message: "Artist tracks Info" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTrackInfo,
  getSongSearch,
  getAlbumTracks,
  getArtistTracks,
};
