"use strict";
const axios = require("axios");

const getTrackInfo = async (req, res) => {
  const { trackid } = req.params;
  try {
    const { data } = await axios.get(`https://api.deezer.com/track/${trackid}`);
    res.status(200).json({ status: 200, data: data, message: "Track Info" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSongSearch = async (req, res) => {
  const { query } = req.params;
  try {
    const { data } = await axios.get(
      `https://api.deezer.com/search?q=${query}`
    );
    res.status(200).json({ status: 200, data: data, message: "Track Info" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getTrackInfo, getSongSearch };
