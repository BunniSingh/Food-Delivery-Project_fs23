import React from 'react'
import styles from './EmptyCart.module.css'

import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <div className={styles.caontainer}>
            <div className={styles["empty"]}>
                <h1>Your cart is waiting to be filled with delicious treats!</h1>
                <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="empty_gif" />
            </div>
            <button><Link to={'/'} >Go to Home</Link></button>
        </div>
    )
}

export default EmptyCart