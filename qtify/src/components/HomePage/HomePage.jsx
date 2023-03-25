import React from "react";
import { useOutletContext } from "react-router-dom";
import AlbumSectionWrapper from "../AlbumSectionWrapper/AlbumSectionWrapper";
import FAQsection from "../FAQsection/FAQsection";
import { HeroSection } from "../HeroSection/HeroSection";
import Navbar from "../Navbar/Navbar";
import SongSectionWrapper from "../SongSectionWrapper/SongSectionWrapper";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

function HomePage() {
  const { newAlbums = [], topAlbums = [], songs = [] } = useOutletContext();

  return (
    <>
      <Navbar data={[...newAlbums, ...topAlbums]} />
      <HeroSection />
      <div className="albums_and_songsSection">
        <AlbumSectionWrapper topAlbums={topAlbums} newAlbums={newAlbums} />
        <SongSectionWrapper songs={songs} />
      </div>
      <FAQsection />
      <AudioPlayer />
    </>
  );
}

export default HomePage;
