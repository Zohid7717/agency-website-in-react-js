import React from 'react';
import styles from './PortfolioCard.module.scss'
import hoverArray from '../../../assets/images/hover-arrow.svg'

const PortfolioCard = ({ id, title, image, category }) => {
  return (
    <div className={styles.portfolioCard}>
      <li className={styles.portfolioCard__item}>
        <img src={image} alt="" className={styles.portfolioCard__img} />
        <button className={styles.portfolioCard__btn}>{category}</button>
        <div className={styles.portfolioCard__item_hover}>
          <img src={hoverArray} alt='' className={styles.portfolioCard__item_hover_arrow} />
          <p className={styles.portfolioCard__item_hover_info}>{title}</p>
        </div>
      </li>
    </div>
  );
}

export default PortfolioCard;
