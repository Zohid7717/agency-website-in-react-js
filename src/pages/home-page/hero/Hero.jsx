import React, { useContext } from 'react';
import { UContainer } from '../../../components/utils/Utils';
import UBtn from '../../../components/ui/u-btn/uBtn';
import styles from './Hero.module.scss'
import hero_img from '../../../assets/images/hero_img.jpg';
import cn from 'classnames';
import { ThemeContext } from '../../../providers/ThemeProvider';

const Hero = () => {
  const {theme}=useContext(ThemeContext)
  return (
    <div className={cn('hero', {dark: theme === 'dark'})}>
      <UContainer>
        <div className={styles.hero__wrapper}>
          <div className={styles.hero__contents}>
            <div className={styles.hero__contents_text}>
              <h1 className={styles.hero__contents_text_h1}>Biz veb-saytlar,  ilovalarni ishlab chiqamiz</h1>
              <p className={styles.hero__contents_text_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className={styles.hero__contents_bth}>
              <UBtn text={'Portfolio'} />
            </div>
          </div>
          <div className={styles.hero__img}>
            <img src={hero_img} alt="hero_img" />
          </div>
        </div>
      </UContainer>
    </div>
  );
}

export default Hero;
