import React from 'react'
import styles from './WishListCart.module.css'
import FoodItem from '../FoodItem/FoodItem'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { IoMdArrowRoundBack  } from "react-icons/io";

const WishListCart = () => {
    const {food_list} = useSelector(state => state.food_data);
    
    const showWishList = food_list.filter(item => item.isFav === true);
    
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            {showWishList.length > 0 ?
                <div className={styles['wish-list-container']}>
                    {
                        showWishList.map((item, idx) => {
                            return (
                                <FoodItem key={idx} {...item} />
                            )
                        })
                    }
                </div>
                :
                <div className={styles['empty-container']}>
                    <button onClick={() => navigate('/')}><IoMdArrowRoundBack  className={styles.icon}/> Go to Menu</button>
                    <img src='https://www.our-eshop.com/frontend/assets/images/no-wish-list.png' alt="empty_wish_list_img" />
                </div>

            }
        </div>
    )
}

export default WishListCart