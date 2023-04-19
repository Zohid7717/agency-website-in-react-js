import React from 'react';
import styles from './About.module.scss'
import { UContainer } from '../../../components/utils/Utils';

const About = () => {
  return (
    <>
      <div id='about' className={styles.about}>
        <h2 className={styles.about__title}>
          Kompaniya haqida
        </h2>
        <div className={styles.about__context}>
          <div className={styles.about__left}>
            <p className={styles.about__left_1}>
              Agentlik-bu mijozlarga o'z bizneslari uchun sifatli va innovatsion echimlarni taqdim etish maqsadida tashkil etilgan veb-agentlik. Bizning jamoamiz mijozlarga moslashtirilgan va sifatli mahsulotni taklif qilish uchun yaqin hamkorlikda ishlaydigan tajribali veb-dizayn, ishlab chiqish va marketing mutaxassislaridan iborat.
            </p>
            <p className={styles.about__left_2}>
              Biz veb-dizayn, veb-sayt va mobil ilovalarni ishlab chiqish, SEO optimallashtirish, kontent yaratish va reklama kampaniyalarini o'z ichiga olgan keng ko'lamli xizmatlarni taklif etamiz. Biz eng yangi texnologiyalar va innovatsion usullardan foydalangan holda brendni rivojlantirish va sotishni ko'paytirish bilan shug'ullanamiz.
            </p>
          </div>
          <div className={styles.about__right}>
            <div className={styles.about__right_item}>
              <h2 className={styles.about__right_item_title}>20+</h2>
              <p className={styles.about__right_item_text}>Amaldagi loyihalar</p>
            </div>
            <div className={styles.about__right_item}>
              <h2 className={styles.about__right_item_title}>4 yil</h2>
              <p className={styles.about__right_item_text}>Tajriba</p>
            </div>
            <div className={styles.about__right_item}>
              <h2 className={styles.about__right_item_title}>12+</h2>
              <p className={styles.about__right_item_text}>Mutaxasislar</p>
            </div>
            <div className={styles.about__right_item}>
              <h2 className={styles.about__right_item_title}>4 yil</h2>
              <p className={styles.about__right_item_text}>Tajriba</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default About;
