import React from 'react'
import styles from './Footer.module.css'
import { assets } from '../../assets/assets'

import { FaFacebook, FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className={styles.footer} id={styles.footer}>
            <div className={styles['footer-container']}>
                <div className={styles['footer-left']}>
                    <div className={styles.logo}>
                        <img src={assets.logo} alt="logo" />
                        <span className={styles.first}>Fav</span>
                        <span className={styles.second} >Food</span>
                    </div>
                    <p>Bringing people together through the joy of fresh and flavorful meals. Whether dining in or at home, we’re here to serve you with care and excellence.</p>

                    <div className={styles['footer-icon']}>
                    <h4>Follow us</h4>
                        <div className={styles['social-icons']}>
                            <FaXTwitter className={styles.icon}/>
                            <FaFacebook className={styles.icon}/>
                            <FaInstagram className={styles.icon}/>
                            <FaGithub className={styles.icon}/>
                        </div>
                    </div>
                </div>

                <div className={styles['footer-center']}>
                    <h3>COMPANY</h3>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Blogs</li>
                        <li>Delivery</li>
                    </ul>
                </div>

                <div className={styles['footer-right']}>
                    <h3>GET IN TOUCH</h3>
                    <ul>
                        <li>Cookie Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy policy</li>
                        <li>Refund & Cancellation</li>
                    </ul>
                </div>

                <div className={styles['footer-help']}>
                    <h3>Support</h3>
                    <p>+91-8892-54-8949</p>
                    <p>contact@favfood.com</p>
                    <p>Recieve exclusive offers in your mailbox</p>
                    <div>
                        <input type="text" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <hr />
            <p className={styles.cpyrigth}>All rights reserved &#169; FavFood</p>
        </div>
    )
}

export default Footer