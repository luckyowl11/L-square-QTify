import React from "react";
import styles from "./Cards.module.css";

function Cards({ cardData, type }) {
  function defaultCard() {
    const cardData = {};
    cardData.img = require("../../assets/CardImageBollySongs.png");

    cardData.title = "New Bollwood";

    cardData.followers = "100";
    return cardData;
  }
  if (!cardData) cardData = defaultCard();

  return (
    <>
      {type === "albums" && (
        <div id={cardData.id} className={styles.card}>
          <div className={styles.cardContent}>
            <img
              className={styles.cardImg}
              src={cardData.image}
              alt="card_pic"
            />
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
      )}
      {type === "songs" && (
        <div id={cardData.id} className={styles.card}>
          <div className={styles.cardContent}>
            <img
              className={styles.cardImg}
              src={cardData.image}
              alt="card_pic"
            />
            <div className={styles.albumFollowers}>
              <p className={styles.aFollo_Text}>{`${(
                Number(cardData.likes) / 1000
              ).toFixed(1)}k Likes`}</p>
            </div>
          </div>
          <div className={styles.cardTitle}>
            <p>{`${cardData.title}`}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Cards;
