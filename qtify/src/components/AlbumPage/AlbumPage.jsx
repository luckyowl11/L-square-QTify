import React from "react";
import { useOutletContext } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
function AlbumPage() {
  const { newAlbums = [], topAlbums = [], songs = [] } = useOutletContext();

  return (
    <>
      <Navbar data={[...newAlbums, ...topAlbums]} />
      <AudioPlayer />
    </>
  );
}

export default AlbumPage;
