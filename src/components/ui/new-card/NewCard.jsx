import React from 'react';
import { FiShare2 } from 'react-icons/fi'
import styles from './NewCard.module.scss';

const NewCard = ({ newDB }) => {
  
  return (
    <div className={styles.newcard}>
      <h2 className={styles.newcard__title}>{newDB.title}</h2>
      <div className={styles.newcard__img} id='newCardImgId'>
        <img src={newDB.image} alt="" />
      </div>
      <p className={styles.newcard__text}>{newDB.text}</p>
      <div className={styles.newcard__aside}>
        <p>{newDB.teg}</p>
        <p>{newDB.date}</p>
        <button><FiShare2 /> Ulashish</button>
      </div>
    </div>
  );
}

export default NewCard;
