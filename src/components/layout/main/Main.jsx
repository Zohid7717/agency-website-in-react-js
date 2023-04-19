import React from 'react';
import styles from './Main.module.scss'
import { UContainer } from '../../utils/Utils';

const Main = ({children}) => {
  return (
    <div className={styles.main}>
      <UContainer>
        {children}
      </UContainer>
    </div>
  );
}

export default Main;
