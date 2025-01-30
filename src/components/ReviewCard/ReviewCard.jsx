import React from 'react'
import styles from './ReviewCard.module.css'

import { assets } from '../../assets/assets'
import { IoMdStar } from "react-icons/io";

const ReviewCard = (props) => {
    return (
        <div className={styles["review-card"]}>
            <div className={styles["user-info"]}>
                <div className={styles.user}>
                    <img src={assets.user_img} alt="user-img" />
                    <div >
                        <p className={styles.name}>{props.name}</p>
                        <p className={styles.date}>{props.date}</p>
                    </div>
                </div>
                <div className={styles.rating}>
                    <span>{props.rating}</span>
                    <IoMdStar className={styles.icon} />
                </div>
            </div>
            <p className={styles.review}>{props.comment}</p>
        </div>
    )
}

export default ReviewCard