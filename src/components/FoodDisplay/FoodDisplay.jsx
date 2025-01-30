import React, { useEffect, useState } from 'react'
import styles from './FoodDisplay.module.css'
import { useSelector } from 'react-redux'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    const [length , setLength] = useState(16);
    let {food_list} = useSelector(state => state.food_data);
    
    const showData = food_list.slice(0, length);
    
  return (
    <div className={styles.container} id='menu'>
        <h2>Trending Dishes Nearby</h2>
        <div className={styles['food-card-container']}>
            {
                showData.map((item, idx) => {
                    if(category === 'All' || category ===  item.category ){
                        return (
                            <FoodItem key={idx} {...item}/> 
                        )
                    }
                })
            }
        </div>
        <div className={styles['show-more-btn']}>
            {
                length === 16 ? <button onClick={()=> setLength(food_list.length)}>Show Full Menu</button>
                :
                ""
            }
        </div>
    </div>
  )
}

export default FoodDisplay