import React from "react";
import styles from "./CardsCarousel.module.css";
import Carousel from "../Carousel/Carousel";

function CardsCarousel({ data, className, cardType, ...props }) {
  const classes = className
    ? `${styles.container} ${className}`
    : `${styles.container}`;

  return (
    <div className={`${classes}`} {...props}>
      <Carousel data={data} cardType={cardType} />
    </div>
  );
}

export default CardsCarousel;
