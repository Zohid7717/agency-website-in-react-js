import React, { useContext } from 'react';
import styles from './ThemeBtn.module.scss'
import { BiSun } from 'react-icons/bi';
import { HiOutlineMoon } from 'react-icons/hi';
import { ThemeContext } from '../../../providers/ThemeProvider';
import cn from 'classnames'

const ThemeBtn = () => {

  const { isDark, setIsDark } = useContext(ThemeContext)
  return (
    <div className={styles.themebtn}>
      <div className={cn('themebtn__bg', { active: isDark })}></div>
      <div className={cn('themebtn__light', {active: isDark})} onClick={() => setIsDark(false)} >
        <BiSun />
      </div>
      <div className={styles.themebtn__dark} onClick={() => setIsDark(true)}>
        <HiOutlineMoon />
      </div>
    </div >
  );
}

export default ThemeBtn;
