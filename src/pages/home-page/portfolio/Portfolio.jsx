import React, {useEffect} from 'react';
import styles from './Portfolio.module.scss'
import PortfolioItems from '../../../components/ui/portfolio-items/PortfolioItems';
import { db } from '../../../../server/localDB';
import { getApi } from '../../../components/utils/network';
import CategoryMenu from '../../../components/ui/category-menu/CategoryMenu';
import { useTheme } from '../../../providers/ThemeProvider';
import UBtn from '../../../components/ui/u-btn/uBtn';

const Portfolio = () => {
  const { projectDB, setProjectDB } = useTheme()
  const { changeCategory, setChangeCategory } = useTheme()
  const maxCard = 6;
  useEffect(() => {
    const fetchData = async () => {
      if (changeCategory) {
        const data = await getApi.projectCategory(changeCategory)
        setProjectDB(data)
        console.log(projectDB)
      } else {
        const data = await getApi.project();
        setProjectDB(data)
      }
    }
    fetchData()
    
  }, [changeCategory])
  

  return (
    <div id='portfolio' className={styles.portfolio}>
      <CategoryMenu />
      <PortfolioItems projectDB={projectDB} maxCard={maxCard} />
      <UBtn text={'Barchasini ko`rish'}/>
    </div>
  );
}

export default Portfolio;
