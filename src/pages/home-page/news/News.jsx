import React from "react";
import styles from './News.module.scss';
import { NewsData, getApi } from '../../../components/utils/network';
import NewsCard from '../../../components/ui/news-card/NewsCard';
import PauseOnHover from '../../../components/ui/carousel/Carousel';
import { Link } from 'react-router-dom';

const News = () => {
  const slidesToShow = 3;
  return (
    <div className={styles.carousel}>
      <h2 className={styles.carousel__title} >Blog yangiliklari</h2>
      <PauseOnHover slidesToShow={slidesToShow}>
        {NewsData().map(item =>
          <Link to={`/NewsPage/${item.id}`}>
            <NewsCard key={item.id} id={item.id} image={item.image} title={item.title} text={item.text} teg={item.teg} date={item.date} />
          </Link>
        )}
      </PauseOnHover>
    </div >
  );
}

export default News;