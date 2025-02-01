import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css';
import { assets } from '../../assets/assets';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginState, setUserData } from '../../slices/loginSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { getTotalCartAmount } from '../../calculationsFile/calculation'

import { FaHeart, FaHamburger  } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  const [menu, setMenu] = useState('Home');
  const { userData } = useSelector(state => state.login_data);
  const dispatch = useDispatch();
  
  const { food_list } = useSelector(state => state.food_data);
  const total = getTotalCartAmount(food_list)

  const [isScrolled, setIsScrolled] = useState(false);

  const onLogInClick = () => {
    dispatch(setLoginState(true))
  }

  const onLogOutClick = async () => {
    await signOut(auth);
    localStorage.removeItem('userLoginDetails');
    dispatch(setUserData({}))
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])


  const onWishListClick = () => {
    // window.location.pathname = '/wish_list'
    navigate('/wish_list')

  }

  return (
    <div className={`${styles.container} ${isScrolled ? styles.scrolled : ""}`}>
      <Link to={'/'}>
        <div className={styles.logo}>
          <img src={assets.logo} alt="logo" />
          <span className={styles.first}>Fav</span>
          <span className={styles.second} >Food</span>
        </div>
      </Link>

      <ul className={styles.links}>
        <li onClick={() => setMenu('Home')} className={menu === 'Home' ? `${styles.active}` : ''}><Link to={'/'}>Home</Link></li>
        {/* <li onClick={() => setMenu('Menu')} className= {menu === 'Menu' ? `${styles.active}` : ''}><a href='#menu'>Menu</a></li> */}
        <li onClick={() => setMenu('Review')} className={menu === 'Review' ? `${styles.active}` : ''}><Link to={'/review'}>Reviews</Link></li>
        <li id={styles['cart']} onClick={() => setMenu('Cart')} className={menu === 'Cart' ? `${styles.active}` : ''}>
          <Link to={'/cart'}>Cart</Link>
          {total ? <div className={styles.dot}></div> : <></>}
        </li>
      </ul>

      <div className={styles.btn}>
        <FaHeart  onClick={onWishListClick} className={styles['wish-list-btn']} />
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