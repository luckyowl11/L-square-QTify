import Navbar from "./components/Navbar/Navbar";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { Cards } from "./components/Cards/Cards";
import { useEffect, useState } from "react";
import axios from "axios";
import AlbumSection from "./AlbumSection/AlbumSection";
// https://qtify-backend-labs.crio.do/albums/top

// https://qtify-backend-labs.crio.do/albums/new

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  const fetchAlbums = async () => {
    try {
      const topAlbums = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      const newAlbums = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/new"
      );

      setTopAlbums(topAlbums.data);
      setNewAlbums(newAlbums.data);
      return { topAlbums: topAlbums.data, newAlbums: newAlbums.data };
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <>
      <Navbar />
      <div className="main_content">
        <HeroSection />
        <AlbumSection title="Top" albumsData={topAlbums} />
        <AlbumSection title="New" albumsData={newAlbums} />
      </div>
    </>
  );
}

export default App;
