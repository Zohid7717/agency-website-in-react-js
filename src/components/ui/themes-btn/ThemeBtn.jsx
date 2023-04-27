import React, { useContext } from 'react';
import styles from './ThemeBtn.module.scss'
import { BiSun } from 'react-icons/bi';
import { HiOutlineMoon } from 'react-icons/hi';
import { THEME_DARK, THEME_LIGHT, useTheme, ThemeContext } from '../../../providers/ThemeProvider';
import cn from 'classnames'

const ThemeBtn = () => {
  const isTheme = useTheme()
  const { theme, setTheme } = useContext(ThemeContext)
  
  return (
    <div className={styles.themebtn}>
      <div className={cn('themebtn__bg', { active: theme===THEME_DARK })}></div>
      <div className={cn('themebtn__light', { active: theme === THEME_DARK })} onClick={() =>isTheme.change(THEME_LIGHT)} >
        <BiSun />
      </div>
      <div className={styles.themebtn__dark} onClick={() => isTheme.change(THEME_DARK)}>
        <HiOutlineMoon />
      </div>
    </div >
  );
}

export default ThemeBtn;

// const ThemeBtn = () => {

//   const { isDark, setIsDark } = useContext(ThemeContext)
//   return (
//     <div className={styles.themebtn}>
//       <div className={cn('themebtn__bg', { active: isDark })}></div>
//       <div className={cn('themebtn__light', { active: isDark })} onClick={() => setIsDark(false)} >
//         <BiSun />
//       </div>
//       <div className={styles.themebtn__dark} onClick={() => setIsDark(true)}>
//         <HiOutlineMoon />
//       </div>
//     </div >
//   );
// }

// export default ThemeBtn;