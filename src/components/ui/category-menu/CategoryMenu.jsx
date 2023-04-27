import React, { useContext, useEffect } from 'react';
import styles from './categoryMenu.module.scss'
import { ThemeContext, useTheme } from '../../../providers/ThemeProvider';

const CategoryMenu = () => {
  const { changeCategory, setChangeCategory } = useTheme()
  const getValue = (e) => {
    setChangeCategory(e.target.value)
  }
  return (
    <div className={styles.portfolio}>
      <h2 className={styles.portfolio__title}>Bajargan Loyihalarimiz</h2>
      <ul className={styles.portfolio__menu}>
        <li className={styles.portfolio__menu_item}>
          <label >
            <input type="radio" onClick={getValue} value='' name='category' className={styles.portfolio__menu_item_input}/>
            <span className={styles.portfolio__menu_item_label}>
              Barchasi
            </span>
          </label>
        </li>
        <li className={styles.portfolio__menu_item}>
          <label>
            <input type="radio" onClick={getValue} value='Veb sayt' name='category' className={styles.portfolio__menu_item_input} />
            <span className={styles.portfolio__menu_item_label}>
              Veb sayt
            </span>
          </label>
        </li>
        <li className={styles.portfolio__menu_item}>
          <label>
            <input type="radio" onClick={getValue} value='Veb dizayn' name='category' className={styles.portfolio__menu_item_input} />
            <span className={styles.portfolio__menu_item_label}>
              Veb dizayn
            </span>
          </label>
        </li>
        <li className={styles.portfolio__menu_item}>
          <label>
            <input type="radio" onClick={getValue} value='SMM' name='category' className={styles.portfolio__menu_item_input} />
            <span className={styles.portfolio__menu_item_label}>
              SMM
            </span>
          </label>
        </li>
        <li className={styles.portfolio__menu_item}>
          <label>
            <input type="radio" onClick={getValue} value='Mobil ilova' name='category' className={styles.portfolio__menu_item_input} />
            <span className={styles.portfolio__menu_item_label}>
              Mobil ilova
            </span>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default CategoryMenu;
