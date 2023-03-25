import React from "react";
import Button from "../Button/Button";

import SearchBar from "../SearchBar/SearchBar";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";

function Navbar({ data }) {
  return (
    <div className={styles.navbar}>
      <Logo />
      <SearchBar data={data} />
      <Button secondary className={styles.feed_btn}>
        Give Feedback
      </Button>
    </div>
  );
}

export default Navbar;
