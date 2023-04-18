import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArtistMain = () => {
  const { artistId } = useParams();
  const [artistInfo, setArtistInfo] = useState(null);

  useEffect(() => {
    fetch(`/deezerapi/artist/${artistId}`)
      .then((res) => res.json())
      .then((data) => setArtistInfo(data.data));
  }, []);

  return <> Ph text</>;
};

export default ArtistMain;
