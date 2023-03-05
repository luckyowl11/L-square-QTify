import React from "react";
import Button from "../Button/Button";
import InputsField from "../InputField/InputsField";

import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";
import { FaSearch } from "react-icons/fa";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <div className={styles.search_bar}>
        <InputsField placeholder={"Search a song of your choice"} />
        <Button other className={styles["search-btn"]}>
          <FaSearch />
        </Button>
      </div>
      <Button secondary className={styles.feed_btn}>
        Give Feedback
      </Button>
    </div>
  );
}

export default Navbar;
