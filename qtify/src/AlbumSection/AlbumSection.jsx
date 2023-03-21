import "./albumSection.css";

import React from "react";
import Button from "../components/Button/Button";
import { Cards } from "../components/Cards/Cards";
import { useState } from "react";

function AlbumSection({ title, albumsData }) {
  const [collapse, setCollapse] = useState(true);

  function handleClickCollapse(e) {
    console.log(collapse);
    setCollapse(!collapse);
  }
  let classes = collapse ? "flexnoW" : "grid";

  return (
    <div className="album_section">
      <div className="album_title_action">
        <p className="alb_sec_title">{title} Albums</p>
        <Button
          secondary
          className="alb_sec_actBtn"
          onClick={handleClickCollapse}
        >
          {collapse ? "Show All" : "Collapse"}
        </Button>
      </div>
      <div className={`albums ${classes}`}>
        {albumsData.map((album) => {
          return <Cards key={album.id} cardData={album} />;
        })}
      </div>
    </div>
  );
}

export default AlbumSection;
