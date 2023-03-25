import React, { useState } from "react";
import styles from "./AudioPlayer.module.css";
import { FaPlay, FaPause } from "react-icons/fa";
import Button from "../Button/Button";

function AudioPlayer() {
  const [playToggle, setPlayToggle] = useState(false);

  function handleClickPlayPause(e) {
    setPlayToggle(!playToggle);
  }

  return (
    <div className={styles.player_container}>
      <div className={styles.song_image_name}>
        <img
          className={styles.song_image}
          src={require("../../assets/CardImageBollySongs.png")}
          alt="song thumbnail"
        />
        <div className={styles.album_song_name}>
          <p className={styles.album_name}>Album Name</p>
          <p className={styles.song_name}>Song Name</p>
        </div>
      </div>
      <div className={styles.audio_player_controls}>
        <Button onClick={handleClickPlayPause} className={styles.PlayPause}>
          {playToggle ? <FaPause /> : <FaPlay />}
        </Button>
        <div className={styles.songProgress}></div>
      </div>
      <div className={styles.dummyDiv}></div>
    </div>
  );
}

export default AudioPlayer;
