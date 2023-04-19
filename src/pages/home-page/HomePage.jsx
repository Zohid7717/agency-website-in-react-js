import React from 'react';
import styles from './HomePage.module.scss'
import Contacts from './contacts/Contacts';
import Services from './services/Services';
import Portfolio from './portfolio/Portfolio';
import Hero from './hero/Hero';
import About from './about/About';
import Main from '../../components/layout/main/Main';

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <Main>
        <About />
        <Portfolio />
        <Services />
        <Contacts />
      </Main>
    </div>
  );
}

export default Home;
