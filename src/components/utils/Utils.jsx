import React from 'react';
import styles from './Utils.module.scss'

export const UContainer = ({children}) => {
  return (
    <div className={styles.u_container}>
      {children}
    </div>
  );
}
