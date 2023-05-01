import React from 'react';
import styles from './NewsCard.module.scss'
import { Link } from 'react-router-dom';

const NewsCard = ({ id, image, title, text, teg, date }) => {
  return (
    <div className={styles.carousel__item}>
      <div className={styles.carousel__item_wrap}>
        <div className={styles.carousel__item_img_wrap}>
          <img className={styles.carousel__item_img} src={image} alt="news image" />
        </div>
        <div className={styles.carousel__item_content}>
          <h3 className={styles.carousel__item_title}>{title}</h3>
          <p className={styles.carousel__item_text}>{text}</p>
          <div className={styles.carousel__item_aside}>
            <p>{teg}</p>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
