import React from 'react';
import styles from './TeamCard.module.scss'

const TeamCard = ({ image, name, job }) => {
  return (
    <div className={styles.teamCard}>
      <div className={styles.teamCard__wrap}>
        <div className={styles.teamCard__img}>
          <img src={image} alt={name} />
        </div>
        <div className={styles.teamCard__content}>
          <p className={styles.teamCard__name}>{name}</p>
          <p className={styles.teamCard__job}>{job}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
