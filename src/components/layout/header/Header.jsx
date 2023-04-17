import React from 'react';
import styles from './Header.module.scss'
import { UContainer } from '../../utils/Utils';
import Logo from './logo/Logo';
import Menu from './menu/Menu';
import MenuAside from './menu-aside/MenuAside';
import BurgerBtn from '../../ui/burger-btn/BurgerBtn';

const Header = () => {
  return (
    <div className={styles.header}>
      <UContainer>
        <div className={styles.header__wrapper}>
          <BurgerBtn/>
          <Logo />
          <Menu />
          <MenuAside />
        </div>
      </UContainer>
    </div>
  );
}

export default Header;
