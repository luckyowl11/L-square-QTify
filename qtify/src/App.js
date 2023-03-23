import Navbar from "./components/Navbar/Navbar";
import { HeroSection } from "./components/HeroSection/HeroSection";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import AlbumSection from "./components/AlbumSection/AlbumSection";
// import SongsSection from "./components/SongsSection/SongsSection";
import SongSectionWrapper from "./components/SongSectionWrapper/SongSectionWrapper";
import AlbumSectionWrapper from "./components/AlbumSectionWrapper/AlbumSectionWrapper";
import FAQsection from "./components/FAQsection/FAQsection";
// https://qtify-backend-labs.crio.do/albums/top

// https://qtify-backend-labs.crio.do/albums/new

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <div className="albums_and_songsSection">
        <AlbumSectionWrapper />

        <SongSectionWrapper />

        <FAQsection />
      </div>
    </>
  );
}

export default App;
