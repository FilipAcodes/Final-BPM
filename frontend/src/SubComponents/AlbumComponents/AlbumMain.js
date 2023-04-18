import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AlbumMain = () => {
  const { albumId } = useParams();
  const [albumInfo, setalbumInfo] = useState(null);

  useEffect(() => {
    fetch(`/deezerapi/album/${albumId}`)
      .then((res) => res.json())
      .then((data) => setalbumInfo(data.data));
  }, []);

  console.log(albumInfo);
  return <>Ph text</>;
};

export default AlbumMain;
