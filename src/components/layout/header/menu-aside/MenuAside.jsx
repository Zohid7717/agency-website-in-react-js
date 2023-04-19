import React from 'react';
import styles from './MenuAside.module.scss'
import ThemeBtn from '../../../ui/themes-btn/ThemeBtn';
import OrderBtn from '../../../ui/order-btn/OrderBtn';

const MenuAside = () => {
  return (
    <div className={styles.menu_aside}>
      <ThemeBtn />
      <div className={styles.menu_aside__contacts}>
        <a href="tel:+998907777777">+998 90 777-77-77</a>
        <a href="mail:">chotatam@gmail.com</a>
      </div>
      <div className={styles.menu_aside__orderBtn}>
        <OrderBtn />
      </div>
    </div>
  );
}

export default MenuAside;
