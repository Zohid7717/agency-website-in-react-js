import React from 'react';
import styles from './PortfolioItems.module.scss'
import PortfolioCard from '../portfolio-card/PortfolioCard';

const PortfolioItems = ({ projectDB, maxCard }) => {
  
  const maxCardArr = (arr) => {
    let content = [];
    let i = 0;
    for (let item of arr) {
      if (i < maxCard) {
        content.push({ id: item.id, title: item.title, category: item.category, image: item.image })
        i++
      } else {
        break
      }
    }
    return content
  }
  return (
    <div>
      <ul className={styles.portfolioItems}>
        {maxCardArr(projectDB).map(item =>
          <PortfolioCard key={item.id} id={item.id} category={item.category} image={item.image} title={item.title} />
        )}
      </ul>
    </div>
  );
}

export default PortfolioItems;
