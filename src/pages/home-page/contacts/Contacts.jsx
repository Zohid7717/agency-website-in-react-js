import React, { useEffect, useState } from 'react';
import styles from './Contacts.module.scss';
import { getApi } from '../../../components/utils/network';
import TeamCard from '../../../components/ui/team-card/TeamCard';
import PauseOnHover from '../../../components/ui/carousel/Carousel';

const Contacts = () => {
  const [teamDB, setTeamDB] = useState([]);
  const slidesToShow = 4;
  useEffect(() => {
    const fetchDate = async () => {
      const data = await getApi.teamDB()
      setTeamDB(data)
    }
    fetchDate()
  }, []);
  return (
    <div className={styles.contacts} id='contacts'>
      <h2 className={styles.contacts__title}>Bizning jamoa</h2>
      <PauseOnHover slidesToShow={slidesToShow}>
        {teamDB.map(item =>
          <TeamCard image={item.image} name={item.name} job={item.job} />
        )}
      </PauseOnHover>
    </div>
  );
}

export default Contacts;
