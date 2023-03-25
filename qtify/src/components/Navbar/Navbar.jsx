import React from "react";
import Button from "../Button/Button";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";
import Modal from "../Modal/Modal";
import InputsField from "../InputField/InputsField";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar({ data }) {
  const [showModal, setShowModal] = useState(false);

  function handleOpenFeedback(e) {
    setShowModal(true);
  }

  function handleCloseFeedback(e) {
    setShowModal(false);
  }

  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.logoHomeLink}>
      <Logo />
      </Link>
      <SearchBar data={data} />
      <Button
        onClick={handleOpenFeedback}
        secondary
        className={styles.feed_btn}
      >
        Give Feedback
      </Button>
      {showModal && (
        <Modal closeModal={handleCloseFeedback} panelClasses={styles.modal}>
          <h3 className={styles.modal_heading}>
            Feedback
            <Button
              onClick={handleCloseFeedback}
              className={styles.close_feedbackX}
            >
              <MdClose />
            </Button>
          </h3>
          <div className={styles.modal_content}>
            <InputsField
              placeholder={"Full Name"}
              className={styles.input_modal}
            />
            <InputsField
              placeholder={"Email Id"}
              className={styles.input_modal}
            />
            <InputsField
              placeholder={"Subject"}
              className={styles.input_modal}
            />
            <InputsField
              placeholder={"Description"}
              textArea
              className={`${styles.input_modal} ${styles.input_description}`}
            />
            <Button
              className={styles.submit_btnFeedBack}
              primary
              onClick={handleCloseFeedback}
            >
              Submit Feedback
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Navbar;
