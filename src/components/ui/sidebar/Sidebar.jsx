import React from 'react';
import SidebarSlider from '../sidebar-slider/SidebarSlider';
import { NewsData } from '../../utils/network';
import SidebarCard from '../sidebar-card/SidebarCard';


const Sidebar = () => {

  return (
    <SidebarSlider>
      {NewsData().map(item =>
        <SidebarCard key={item.id} id={item.id} image={item.image} title={item.title} />
      )}
    </SidebarSlider>
  );
}

export default Sidebar;
