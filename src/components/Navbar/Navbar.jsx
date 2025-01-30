import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css';
import { assets } from '../../assets/assets';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginState, setUserData } from '../../slices/loginSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const Navbar = () => {
    const [menu , setMenu] = useState('Home');

    const { userData } = useSelector(state => state.login_data);

    const dispatch = useDispatch();

    // const [isUserLogin, setIsUserLogin ] = useState(false);

    const onLogInClick = () => {
      dispatch(setLoginState(true))
    }

    const onLogOutClick = async() => {
      await signOut(auth);
      localStorage.removeItem('userLoginDetails');
      dispatch(setUserData({}))
    }

  return (
    <div className={styles.container}>
      <Link to={'/'}>
        <div className={styles.logo}>
            <img src={assets.logo} alt="logo" />
            <span className={styles.first}>Fav</span>
            <span className={styles.second} >Food</span>
        </div>
      </Link>
      
      <ul className={styles.links}>
        <li onClick={() => setMenu('Home')} className= {menu === 'Home' ? `${styles.active}` : ''}><Link to = {'/'}>Home</Link></li>
        {/* <li onClick={() => setMenu('Menu')} className= {menu === 'Menu' ? `${styles.active}` : ''}><a href='#menu'>Menu</a></li> */}
        <li onClick={() => setMenu('Review')} className= {menu === 'Review' ? `${styles.active}` : ''}><Link to = {'/review'}>Reviews</Link></li>
        <li onClick={() => setMenu('Cart')} className= {menu === 'Cart' ? `${styles.active}` : ''}><Link to = {'/cart'}>Cart</Link></li>
      </ul>

      <div className={styles.btn}>
        <div className={styles['icon-btn-div']}>
          <img src={assets.search_icon} alt="search_icon" />
          <div className={styles.cart}>
            <img src={assets.basket_icon} alt="basket_icon" />
            <div className={styles.dot}></div>
          </div>
        </div>
        { 
         userData.name ? 
          <button onClick={onLogOutClick}>Log Out</button>
          :
          <button onClick={onLogInClick}>Sign In</button>
        }
        
      </div>
    </div>
  )
}

export default Navbar