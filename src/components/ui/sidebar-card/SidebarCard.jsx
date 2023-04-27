import React from 'react';
import styles from './SidebarCard.module.scss'
import { Link } from 'react-router-dom';

const SidebarCard = ({ id, image, title }) => {
  return (
    <Link to={`/NewsPage/${id}`}>
      <div className={styles.sidebarcard}>
        <div className={styles.sidebarcard__img}>
          <img src={image} alt="" />
        </div>
        <p className={styles.sidebarcard__title} >{title}</p>
      </div>
    </Link>
  );
}

export default SidebarCard;
