import React from 'react'
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
          <h2>From Our Kitchen to Your Table</h2>
          <p>From our kitchen to your table, we bring the warmth of home in every bite. Crafted with love and the finest ingredients, each dish is a celebration of flavor and comfort.</p>
          <div>
            <button><a href="#menu">Our Dishes</a></button>
          </div>
      </div>
      <div className={styles.right}>
        <video loop autoPlay >
        <source src="https://cdn.dribbble.com/users/319371/screenshots/11984807/media/05cad6c3ffff65f9142bf2958b941171.mp4" type='video/mp4'/>
        <source src="movi.ogg" type="video/ogg"/>
        </video>
      </div>
    </div>
  )
}

export default Header