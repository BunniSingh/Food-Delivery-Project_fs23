import React, { useEffect } from 'react'
import styles from './OrderConfirmation.module.css'
import { useNavigate } from 'react-router-dom';

import { TbTruckDelivery } from "react-icons/tb";
import { getTotalCartAmount, randomOrderId } from '../../calculationsFile/calculation';
import { useSelector } from 'react-redux';
import { setLoginState } from '../../slices/loginSlice';

const OrderConfirmation = () => {
    let navigate = useNavigate();

    const order_id = randomOrderId();
    
    const { food_list } = useSelector(state => state.food_data);
    const total = getTotalCartAmount(food_list);

    const { userAddress } = useSelector(state => state.orders_data);
    const { fName, lName,email, landmark, city, state, pinCode, country, phone } = userAddress;

    
    const { userData } = useSelector(state => state.login_data);




    useEffect(() => {
        if (!userData.name) {
            navigate('/');
        }
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles['top-container']}>
                <h2>
                    Thank you for your order
                    <span>#{order_id}</span>
                </h2>
                <button className={styles.btn} onClick={() => navigate('/')}>Explore more</button>
            </div>

            <div className={styles['middle-container']}>
                <p className={styles['thankyou-para']}><TbTruckDelivery className={styles.icon} /> We'll send you an email with tracking inforamation!</p>
                <div className={styles.middle}>
                    <div className={styles["middle-sub"]}>
                        <h4>Order by</h4>
                        <p>{userData.name}</p>
                        <p>Sold by : FavFood.com</p>
                        <p>Order Id : {order_id}</p>
                        <p>{email}</p>
                    </div>
                    <div className={styles["middle-sub"]}>
                        <h4>Delivery address </h4>
                        <p>{fName} {lName}</p>
                        <p>{landmark}, {city}</p>
                        <p>{state} , {country} - {pinCode}</p>
                        <p>{phone}</p>
                    </div>
                    <div className={styles["middle-sub-bottom"]}>
                        <h4>Status</h4>
                        <h3>Your Ariving in 30 minutes!</h3>
                    </div>
                </div>
            </div>

            <div className={styles['bottom-container']}>
                <div className={styles['bottom-left']}>
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
                        {total !== 0 ? <b>₹{total < 300 ? total + 50 : total}</b> : <b>₹0 <span> &#40;tax-included&#41;</span></b>}
                    </div>
                    {/* <button onClick={onSubitClick} className={styles["check-out-btn"]}>proceed to Payment</button> */}
                </div>
                <div className={styles['bottom-right']}>
                    <p>Order Mode</p>
                    <h3>Cash On Delivery</h3>

                </div>
            </div>
        </div>
    )
}

export default OrderConfirmation