"use strict";
const express = require("express");
const morgan = require("morgan");
const {
  likeSong,
  createPlaylist,
  getUserLikedSong,
  getAllUserLikedSongs,
  getUserPlaylist,
  getAllCommentsOnSong,
  createCommentOnSong,
} = require("./handlers");
const { getTrackInfo, getSongSearch } = require("./apiCalls");

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  //More info on console
  .use(morgan("tiny"))
  .use(express.json())
  .use(express.static("public"))
  //EndPoints
  .patch("/likesong", likeSong)
  .post("/addplaylist", createPlaylist)
  .get("/songinfo/:songid", getUserLikedSong)
  .get("/alllikedsongs/:email", getAllUserLikedSongs)
  .get("/userplaylists/:email", getUserPlaylist)
  .get("/comments/:songid", getAllCommentsOnSong)
  .post("/comments/create", createCommentOnSong)
  .get("/deezerapi/track/:trackid", getTrackInfo)
  .get("/deezerapi/search/:query", getSongSearch)

  //-----//
  .get("*", (req, res) => {
    res.status(404).json({ status: 404, message: "This ain't it chief" });
  })
  .listen(8000, () => console.log("Listening on Port 8000"));
