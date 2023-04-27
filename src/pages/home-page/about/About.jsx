import React from 'react';
import styles from './About.module.scss'
import target from '../../../assets/images/advantage_target.svg'
import chart from '../../../assets/images/advantage_chart.svg'
import racket from '../../../assets/images/advantage_racket.svg'

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
      <div className={styles.advantage}>
        <h2 className={styles.advantage__title}>Bizning afzalliklarimiz</h2>
        <ul className={styles.advantage__items}>
          <li className={styles.advantage__item}>
            <img src={target} alt="target" className={styles.advantage__item_img} />
            <h3 className={styles.advantage__item_title}>Individual yondashuv</h3>
            <p className={styles.advantage__item_text}>Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz</p>
          </li>
          <li className={styles.advantage__item}>
            <img src={chart} alt="chart" className={styles.advantage__item_img} />
            <h3 className={styles.advantage__item_title}>Ekspertiza</h3>
            <p className={styles.advantage__item_text}>Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz</p>
          </li>
          <li className={styles.advantage__item}>
            <img src={racket} alt="" className={styles.advantage__item_img} />
            <h3 className={styles.advantage__item_title}>Professional xizmat</h3>
            <p className={styles.advantage__item_text}>Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz</p>
          </li>
          <li className={styles.advantage__item}>
            <img src={target} alt="target" className={styles.advantage__item_img} />
            <h3 className={styles.advantage__item_title}>Individual yondashuv</h3>
            <p className={styles.advantage__item_text}>Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz</p>
          </li>
          <li className={styles.advantage__item}>
            <img src={chart} alt="chart" className={styles.advantage__item_img} />
            <h3 className={styles.advantage__item_title}>Ekspertiza</h3>
            <p className={styles.advantage__item_text}>Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz</p>
          </li>
          <li className={styles.advantage__item}>
            <img src={racket} alt="" className={styles.advantage__item_img} />
            <h3 className={styles.advantage__item_title}>Professional xizmat</h3>
            <p className={styles.advantage__item_text}>Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default About;
