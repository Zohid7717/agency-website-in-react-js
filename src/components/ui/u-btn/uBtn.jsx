import React from 'react';
import styles from './uBtn.module.scss'

const UBtn = ({text}) => {
  return (
    <div className={styles.uBtn}>
      <p className={styles.uBtn__text}>{text}</p>
      <div className={styles.uBtn__bg}>
        <p className={styles.uBtn__bg_text}>{text}</p>
      </div>
    </div>
  );
}

export default UBtn;
