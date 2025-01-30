import React, { useState } from 'react'
import styles from './FoodItem.module.css';

import { IoMdStar, IoMdStarOutline, IoIosAdd, IoIosAddCircle, IoMdRemoveCircle, IoMdHeartEmpty  , IoMdHeart } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";

import { useDispatch } from 'react-redux';
import {addItemCount, removeAsFav, setAsFav, subtractItemCount} from '../../slices/foodSlice'

const FoodItem = (props) => {
    const dispatch = useDispatch();
    const {_id , name, image, price, description, category, rating, count, isFav} = props;
    
    let arr = [];
    for(let i = 0; i < 5; i++){
        if(Math.floor(rating) > (i + 1)){
            arr.push(1);
        }else{
            arr.push(0)
        }
    }

  return (
    <div className={styles.container}>
        <div className={styles['img-div']}>
            <img src={image} alt={`${category}_img`} />
            {
                isFav ? <IoMdHeart className={styles['fav-icon']} onClick={() => dispatch(removeAsFav(_id))}/>
                : 
                <IoMdHeartEmpty  className={styles['fav-icon']} onClick={() => dispatch(setAsFav(_id))}/>
            }
            {
                !count ? <IoIosAdd onClick={() => dispatch(addItemCount(_id))} className={styles.add_icon_white}/>
                :
                <div className={styles['food-item-counter']}>
                    <IoMdRemoveCircle  onClick={() => dispatch(subtractItemCount(_id))} className={styles['remove-icon']}/>
                    <p>{count}</p>
                    <IoIosAddCircle onClick={() => dispatch(addItemCount(_id))} className={styles['add-icon']}/>
                </div>
            }
        </div>
        <div className={styles['info-div']}>
            <div className={styles['item-name-rating']}>
                <p className={styles.name}>{name}</p>
                <p className={styles.rating}>{arr.map((e, i) => e === 1 ? <IoMdStar key={i} className={styles.icon}/> : <IoMdStarOutline key={i} className={styles.icon}/> )}</p>
            </div>
            <p className={styles.description}>{description}</p>
            <div className={styles['price-delivery']}>
                <p className={styles.price}>₹ {price}</p>
                <div>
                    <MdDeliveryDining className={styles['deliver-icon']}/>
                    <span>Free Delivery</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FoodItem