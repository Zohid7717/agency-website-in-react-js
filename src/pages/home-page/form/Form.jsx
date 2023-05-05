import React from 'react';
import black_coffee from '../../../assets/images/black_coffee.png';
import coffee_milk from '../../../assets/images/coffee_milk.png';
import water from '../../../assets/images/woter.png';
import tea from '../../../assets/images/tea.png';
import UBtn from '../../../components/ui/u-btn/uBtn';
import styles from './Form.module.scss'

const Form = () => {
  return (
    <div className={styles.form}>
      <div className={styles.form__left}>
        <h3 className={styles.form__title}>Sizni bir finjon qahva ustida loyihangizni batafsil muhokama qilishga mamnuniyat ila taklif qilamiz.</h3>
        <input type="text" className={styles.form__name} required placeholder='Ismingiz' />
        <input type="text" className={styles.form__number} required placeholder='Telefon raqamingiz' />
        <input type="text" className={styles.form__idea} placeholder="G'oyangiz haqida qisqacha (muhim emas)" />
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
            <input type="checkbox" className={styles.form__checkbox_input} value="Internet magazin ishlab chiqish" />
            <span className={styles.form__checkbox_icon}></span>
            CRM ishlab chiqish
          </label>
          <label className={styles.form__checkbox_label} >
            <input type="checkbox" className={styles.form__checkbox_input} value="Motion dizayn" />
            <span className={styles.form__checkbox_icon}></span>
            Motion dizayn
          </label>
          <label className={styles.form__checkbox_label} >
            <input type="checkbox" className={styles.form__checkbox_input} value="Logotip va Brandbook" />
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
        <div className={styles.form__right_main}>
          <p className={styles.form__right_title} >
            NIMANI MA'QUL KO'RASIZ?
          </p>
          <div className={styles.form__right_choice}>
            <label className={styles.form__right_label} >
              <input type="radio" className={styles.form__right_input} name='drink' value="black coffee" />
              <img src={black_coffee} alt="black coffee" className={styles.form__right_img} />
              Achchiq kofe
            </label>
            <label className={styles.form__right_label} >
              <input type="radio" name='drink' className={styles.form__right_input} value="milk coffee" />
              <img src={coffee_milk} alt="milk coffee" className={styles.form__right_img} />
              Sutli kofe
            </label>
            <label className={styles.form__right_label} >
              <input type="radio" name='drink' className={styles.form__right_input} value="woter" />
              <img src={water} alt="woter" className={styles.form__right_img} />
              Suv
            </label>
            <label className={styles.form__right_label} >
              <input type="radio" name='drink' className={styles.form__right_input} value="tea" />
              <img src={tea} alt="tea" className={styles.form__right_img} />
              Choy
            </label>
          </div>
        </div>
        <div className={styles.form__right_btn}>
          <UBtn text={'Mijoz bolish'}  />
        </div>
      </div>
    </div>
  );
}

export default Form;
