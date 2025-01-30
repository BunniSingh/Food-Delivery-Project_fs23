import React from 'react'
import styles from './DownloadApp.module.css'
import { assets } from '../../assets/assets'

const DownloadApp = () => {
  return (
    <div className={styles.container}>
        <p>For Better Exprience Download <br />FavFod App</p>
        <div className={styles['app-download-platform']}>
            <img src={assets.play_store} alt="play_store_img" />
            <img src={assets.app_store} alt="add_store_img" />
        </div>
    </div>
  )
}

export default DownloadApp