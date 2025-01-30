import React from 'react'
import styles from './ExploreMenu.module.css';
import { menu_list } from '../../assets/assets';
const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className={styles.container}>
      <h2>What are you craving today?</h2>
      <p className={styles['Explore-menu-text']}>What are you craving today? Let us satisfy your hunger with something delicious from our menu!</p>
      <div className={styles.menuList}>
        {
          menu_list.map((ele, idx) => {
            return(
              <div onClick={()=>{setCategory(prev => prev === ele.menu_name ? 'All' : ele.menu_name)}}  key={idx} className={styles['explore-menu-items']}>
                <img className={category === ele.menu_name ? `${styles.active}` : ''} src={ele.menu_image} alt="menu_img" />
                <p>{ele.menu_name}</p>
              </div>
            )
          })
        }
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu