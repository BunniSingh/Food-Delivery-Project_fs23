import React, { useEffect, useRef } from 'react'
import styles from './PlaceOrder.module.css';
import { getTotalCartAmount } from '../../calculationsFile/calculation';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { IoArrowBack } from "react-icons/io5";
import { setLoginState } from '../../slices/loginSlice';
import { setUserAddress } from '../../slices/userOrderSlice';

const PlaceOrder = () => {
  const fNameRef = useRef('');
  const lNameRef = useRef('');
  const emailRef = useRef('');
  const landmarkRef = useRef('');
  const cityRef = useRef('');
  const stateRef = useRef('');
  const pinCodeRef = useRef('');
  const countryRef = useRef('');
  const phoneRef = useRef('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { food_list } = useSelector(state => state.food_data);
  const { userData } = useSelector(state => state.login_data);
  
  const total = getTotalCartAmount(food_list);

  useEffect(()=>{
    if(!userData.name){
      dispatch(setLoginState(true));
      navigate('/cart');
    }
  },[])

  useEffect(()=>{
    if(!total){
      navigate('/')
    }
  },[])

  const onSubitClick = (e) => {
    e.preventDefault();
    
    const fName = fNameRef.current.value.trim();
    const lName = lNameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const landmark = landmarkRef.current.value.trim();
    const city = cityRef.current.value.trim();
    const state = stateRef.current.value.trim();
    const pinCode = pinCodeRef.current.value.trim();
    const country = countryRef.current.value.trim();
    const phone = phoneRef.current.value.trim();

    if(!fName || !lName || !email || !city || !state || !pinCode || !country || !phone){
      alert('All field are requird!')
      return;
    }

    let userAddress = {
      fName,
      lName,
      email,
      landmark,
      city,
      state,
      pinCode,
      country,
      phone,
    }
    dispatch(setUserAddress(userAddress));
    navigate('/confirm_order');
  }


  return (
    <div className={styles.container}>
      <div onClick={() => navigate('/cart')} className={styles['back-btn']}>
        <IoArrowBack className={styles['back-icon']}/>
      </div>
      <form className={styles['place-order-container']}>
        <div className={styles["left"]}>
          <h3>Delivery Details</h3>
          <div className={styles["multi-fields"]}>
            <input ref={fNameRef} type="text" placeholder='First Name' required/>
            <input ref={lNameRef} type="text" placeholder='Last Name' required/>
          </div>
          <input ref={emailRef} type="email" placeholder='xyz@gmail.com' required/><br />
          <input ref={landmarkRef} type="text" placeholder='Landmark(optional)' required/>
          <div className={styles["multi-fields"]}>
            <input ref={cityRef} type="text" placeholder='City' required/>
            <input ref={stateRef} type="text" placeholder='State' required/>
          </div>
          <div className={styles["multi-fields"]}>
            <input ref={pinCodeRef} type="number" placeholder='Pin Code' required/>
            <input ref={countryRef} type="text" placeholder='Country' required/>
          </div>
          <input ref={phoneRef} type="number" placeholder='Phone' required/>
        </div>

        <div className={styles["right"]}>
          <div className={styles['total-cart']}>
            <h2>Cart Totals</h2>
            <div>
              <div className={styles["cart-total-details"]}>
                <p>Subtotal</p>
                <p>₹{total}</p>
              </div>
              <hr />
              <div className={styles["cart-total-details"]}>
                <p>Delivery Fee</p>
                <p>₹{total !== 0 ? 50 : 0}</p>
              </div>
              <hr />
              {
                total > 300 &&
                <>
                  <div className={styles["cart-total-details"]}>
                    <p>Additionl Discount</p>
                    <p className={styles.discount}>- ₹{total !== 0 ? 50 : 0}</p>
                  </div>
                  <hr />
                </>
              }
              <div className={styles["cart-total-details"]}>
                <b>Grant Total</b>
                <b>₹{total < 300 ? total + 50 : total}</b>
              </div>
              <button onClick={onSubitClick} className={styles["check-out-btn"]}>proceed to Payment</button>
            </div>
          </div>
          <div className={styles['right-bottom']}>
            <video loop autoPlay >
              <source src="https://cdn.dribbble.com/users/2874478/screenshots/15675229/media/3d60f9c652584e5ad0b637ec3db2f2fa.mp4" type='video/mp4' />
              <source src="movi.ogg" type="video/ogg" />
            </video>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder