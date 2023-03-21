import React from "react";
import styles from "./Cards.module.css";

export const Cards = ({ cardData }) => {
  function defaultCard() {
    const cardData = {};
    cardData.img = require("../../assets/CardImageBollySongs.png");

    cardData.title = "New Bollwood";

    cardData.followers = "100";
    return cardData;
  }
  if (!cardData) cardData = defaultCard();

  return (
    <div id={cardData.id} className={styles.card}>
      <div className={styles.cardContent}>
        <img className={styles.cardImg} src={cardData.image} alt="card_pic" />
        <div className={styles.albumFollowers}>
          <p className={styles.aFollo_Text}>{`${(
            Number(cardData.follows) / 1000
          ).toFixed(1)}k Follows`}</p>
        </div>
      </div>
      <div className={styles.cardTitle}>
        <p>{`${cardData.title}`}</p>
      </div>
    </div>
  );
};
