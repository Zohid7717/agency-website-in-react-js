import React from 'react';
import styles from './Services.module.scss';
import veb from '../../../assets/images/services image/services_veb.svg';
import uxui from '../../../assets/images/services image/services_uiux.svg';
import mobi from '../../../assets/images/services image/services_mobi.svg';
import smm from '../../../assets/images/services image/services_smm.svg';
import grafic from '../../../assets/images/services image/services_grafic.svg';
import motion from '../../../assets/images/services image/services_motion.svg';


const Services = () => {
  return (
    <div className={styles.services} id='services'>
      <h2 className={styles.services__title}>Bizning xizmatlar</h2>
      <ul className={styles.services__items}>
        <li className={styles.services__item}>
          <img src={veb} alt="veb" className={styles.services__item_img}/>
          <h4 className={styles.services__item_title}>Veb saytlar</h4>
          <p className={styles.services__item_text}>Bizdan eng yaxshi va eng zo'r sifatga ega platforma yarating.</p>
        </li>
        <li className={styles.services__item}>
          <img src={uxui} alt="uxui" className={styles.services__item_img}  />
          <h4 className={styles.services__item_title}>UI/UX Dizayn</h4>
          <p className={styles.services__item_text}>Biz UI/UX dizayn xizmatlarini taqdim etamiz </p>
        </li>
        <li className={styles.services__item}>
          <img src={mobi} alt="mobi" className={styles.services__item_img}  />
          <h4 className={styles.services__item_title}>Mobil ilovalar</h4>
          <p className={styles.services__item_text}>Biz eng yaxshi dizaynerlar  xizmatlarini taqdim etamiz</p>
        </li>
        <li className={styles.services__item}>
          <img src={smm} alt="smm" className={styles.services__item_img}  />
          <h4 className={styles.services__item_title}>SMM</h4>
          <p className={styles.services__item_text}>Bizdan eng yaxshi va eng zo'r sifatga ega platforma yarating.</p>
        </li>
        <li className={styles.services__item}>
          <img src={grafic} alt="grafic" className={styles.services__item_img}  />
          <h4 className={styles.services__item_title}>Grafik dizayn</h4>
          <p className={styles.services__item_text}>Biz fotografiya xizmatlarini
            taqdim etamiz </p>
        </li>
        <li className={styles.services__item}>
          <img src={motion} alt="motion" className={styles.services__item_img}  />
          <h4 className={styles.services__item_title}>Motion dizayn</h4>
          <p className={styles.services__item_text}>Bizdan eng yaxshi va eng zo'r sifatga ega platforma yarating.</p>
        </li>
      </ul>
    </div>
  );
}

export default Services;
