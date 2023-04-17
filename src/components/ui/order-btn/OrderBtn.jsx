import React from 'react';
import styles from './OrderBtn.module.scss'
import { Link } from 'react-router-dom';

const OrderBtn = () => {
  return (
    <div className={styles.order_btn}>
      <Link><button>Qayta qo`ng`iroq</button></Link>
    </div>
  );
}

export default OrderBtn;
