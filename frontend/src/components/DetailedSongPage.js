import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackgroundImage from "../SubComponents/BackgroundImage";
import SongIdBg from "../Images/SongIdBG.jpg";
import DetailsForSong from "../SubComponents/SongDetailsComponents/DetailsForSong";
import PageLoad from "../PageLoad";

const DetailedSongPage = () => {
  const { songId } = useParams();
  const [songInfo, setSongInfo] = useState(null);

  useEffect(() => {
    fetch(`/deezerapi/track/${songId}`)
      .then((response) => response.json())
      .then((response) => setSongInfo(response.data))
      .catch((err) => console.error(err));
  }, []);

  if (!songInfo) {
    return <PageLoad />;
  }

  return (
    <>
      <BackgroundImage imageURL={SongIdBg} />
      <DetailsForSong
        songName={songInfo.title}
        explicit={songInfo.explicit_lyrics}
        artist={songInfo.artist}
        album={songInfo.album}
        mp3={songInfo.preview}
        id={songInfo.id}
        artistid={songInfo.artist.id}
        albumid={songInfo.album.id}
      />
    </>
  );
};

export default DetailedSongPage;
