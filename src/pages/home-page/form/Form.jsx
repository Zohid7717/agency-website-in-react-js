import React from 'react';
import styles from './Form.module.scss'

const Form = () => {
  return (
    <div className={styles.form}>
      <div className={styles.form__left}>
        <h3 className={styles.form__title}>Sizni bir finjon qahva ustida loyihangizni batafsil muhokama qilishga mamnuniyat ila taklif qilamiz.</h3>
        <input type="text" className={styles.form__name} />
        <input type="text" className={styles.form__number} />
        <input type="text" className={styles.form__idea} />
        <p className={styles.form__desired_services}>Qanday xizmatlardan foydalanishni xoxlaysiz?</p>
        <div className={styles.form__checkbox_wrap}>
          <label className={styles.form__checkbox_label} >
            <input type="checkbox" className={styles.form__checkbox_input} value="backend" />
            <span className={styles.form__checkbox_icon}></span>
            Backend
          </label>
          <label className={styles.form__checkbox_label} >
            <input type="checkbox" className={styles.form__checkbox_input} value="CRM ishlab chiqish" />
            <span className={styles.form__checkbox_icon}></span>
            CRM ishlab chiqish
          </label>
          <label className={styles.form__checkbox_label} >
            <input type="checkbox" className={styles.form__checkbox_input} value="frontend" />
            <span className={styles.form__checkbox_icon}></span>
            Frontend
          </label>
          <label className={styles.form__checkbox_label} >
            <input type="checkbox" className={styles.form__checkbox_input} value="CRM ishlab chiqish" />
            <span className={styles.form__checkbox_icon}></span>
            CRM ishlab chiqish
          </label>
          <label className={styles.form__checkbox_label} >
            <input type="checkbox" className={styles.form__checkbox_input} value="Grafik dizayn" />
            <span className={styles.form__checkbox_icon}></span>
            Grafik dizayn
          </label>
          <label className={styles.form__checkbox_label} >
            <input type="checkbox" className={styles.form__checkbox_input} value="Internet magazin ishlab chiqish"/>
            <span className={styles.form__checkbox_icon}></span>
            CRM ishlab chiqish
          </label>
          <label className={styles.form__checkbox_label} >
            <input type="checkbox" className={styles.form__checkbox_input} value="Motion dizayn"/>
            <span className={styles.form__checkbox_icon}></span>
            Motion dizayn
          </label>
          <label className={styles.form__checkbox_label} >
            <input type="checkbox" className={styles.form__checkbox_input} value="Logotip va Brandbook"/>
            <span className={styles.form__checkbox_icon}></span>
            Logotip va BrandBook
          </label>
          <label className={styles.form__checkbox_label} >
            <input type="checkbox" className={styles.form__checkbox_input} value="Mobil ilova ishlab chiqish" />
            <span className={styles.form__checkbox_icon}></span>
            Mobil ilova ishlab chiqish
          </label>
          <label className={styles.form__checkbox_label} >
            <input type="checkbox" className={styles.form__checkbox_input} value="Portal ishlab chiqish" />
            <span className={styles.form__checkbox_icon}></span>
            Portal ishlab chiqish
          </label>
          <label className={styles.form__checkbox_label} >
            <input type="checkbox" className={styles.form__checkbox_input} value="Veb sayt ishlab chiqish" />
            <span className={styles.form__checkbox_icon}></span>
            Veb sayt ishlab chiqish
          </label>
          <label className={styles.form__checkbox_label} >
            <input type="checkbox" className={styles.form__checkbox_input} value="Veb dizayn" />
            <span className={styles.form__checkbox_icon}></span>
            Veb dizayn
          </label>
          <label className={styles.form__checkbox_label} >
            <input type="checkbox" className={styles.form__checkbox_input} value="SMM dizayn" />
            <span className={styles.form__checkbox_icon}></span>
            SMM dizayn
          </label>
          <label className={styles.form__checkbox_label} >
            <input type="checkbox" className={styles.form__checkbox_input} value="Mobilograf" />
            <span className={styles.form__checkbox_icon}></span>
            Mobilograf
          </label>
        </div>
      </div>
      <div className={styles.form__right}>
        
      </div>
    </div>
  );
}

export default Form;
