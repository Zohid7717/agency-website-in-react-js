import React, { useEffect, useState } from 'react';
import Main from '../../components/layout/main/Main'
import styles from './NewsPage.module.scss'
import newsImg from '../../assets/images/newspage_main_image.jpg';
import NewCard from '../../components/ui/new-card/NewCard';
import { useParams } from 'react-router-dom';
import { NewsData, getApi } from '../../components/utils/network';
import Sidebar from '../../components/ui/sidebar/Sidebar';
import { useTheme } from '../../providers/ThemeProvider';
import SidebarCard from '../../components/ui/sidebar-card/SidebarCard';
import PauseOnHover from '../../components/ui/carousel/Carousel';
import NewsCard from '../../components/ui/news-card/NewsCard';

const NewsPage = () => {
  const [newDB, setNewDB] = useState({});
  const { id } = useParams()
  let itemId = { id }
  let strId = itemId.id
  let numId = Number(strId);
  useEffect(() => {
    (async () => {
      const res = await getApi.newsId(numId)
      setNewDB(res)
    })()
  }, [id]);
  return (
    <Main>
      <div className={styles.newspage} >
        <div className={styles.newspage__main}>
          <img src={newsImg} alt="" />
          <NewCard newDB={newDB} />
        </div>
        <div className={styles.newspage__sidebar}>
          <Sidebar>
            {NewsData().map(item =>
              <SidebarCard/>
              )}
          </Sidebar>
        </div>
        <div className={styles.newspage__x_slider}>
          <PauseOnHover >
            {NewsData().map(item =>
              <NewsCard key={item.id} id={item.id} image={item.image} title={item.title} text={item.text} teg={item.teg} date={item.date} />
            )}
          </PauseOnHover>
        </div>
      </div>
    </Main>
  );
}

export default NewsPage;
