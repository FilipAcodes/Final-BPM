import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackgroundImage from "../SubComponents/BackgroundImage";
import SongIdBg from "../Images/SongIdBG.jpg";
import DetailsForSong from "../SubComponents/SongDetailsComponents/DetailsForSong";

const DetailedSongPage = () => {
  const { songId } = useParams();
  const [songInfo, setSongInfo] = useState(null);
  //test
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8327104a61msh2959623d75f0426p15fb85jsnd2a851dace1e",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/track/${songId}`, options)
      .then((response) => response.json())
      .then((response) => setSongInfo(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <BackgroundImage imageURL={SongIdBg} />
      {songInfo && (
        <DetailsForSong
          songName={songInfo.title}
          explicit={songInfo.explicit_lyrics}
          artist={songInfo.artist}
          album={songInfo.album}
          mp3={songInfo.preview}
          id={songInfo.id}
        />
      )}
    </>
  );
};

export default DetailedSongPage;
