import React from 'react';
import styles from './ThemeBtn.module.scss'
import {BiSun} from 'react-icons/bi';
import { HiOutlineMoon } from 'react-icons/hi';

const ThemeBtn = () => {
  return (
    <div className={styles.themebtn}>
      <div className={styles.themebtn__light}>
        <BiSun/>
      </div>
      <div className={styles.themebtn__dark}>
        <HiOutlineMoon/>
      </div>
    </div>
  );
}

export default ThemeBtn;
