import React from 'react';
import styles from './HomePage.module.scss'
import Contacts from './contacts/Contacts';
import Services from './services/Services';
import Portfolio from './portfolio/Portfolio';

const Home = () => {
  return (
    <div className={styles.home}>
      <h2 id='home'>home</h2>
      <Portfolio />
      <Services />
      <Contacts/>
    </div>
  );
}

export default Home;
