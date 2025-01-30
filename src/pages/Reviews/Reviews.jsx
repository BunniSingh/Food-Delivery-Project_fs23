import React, { useState, useRef } from 'react'
import styles from './Reviews.module.css'

import { FaGrinStars } from "react-icons/fa";

import { useDispatch, useSelector } from 'react-redux';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import { randomOrderId } from '../../calculationsFile/calculation';
import { setLoginState } from '../../slices/loginSlice';
import { addFeedbackInList } from '../../slices/reviewSlice';


const Reviews = () => {
    const commentRef = useRef();
    const [ rating , setRating ] = useState(0);
    const [ hover , setHover ] = useState(0);
    const { review_list } = useSelector(state => state.review_data);
    const { userData } = useSelector(state => state.login_data);

    const dispatch = useDispatch();
    const onSubmitBtnClick= () => {

        if(!userData.name){
            dispatch(setLoginState(true));
        }
        let name = userData.name;
        let id = randomOrderId();
        let date = new Date().toLocaleDateString();
        let comment = commentRef.current.value;
        let profileImage = userData.profileImage;

        if(rating === 0 || !comment){
            alert('Invalid Input');
            return;
        }


        const userFeedback = {
            name,
            rating,
            id,
            date,
            comment,
            profileImage,
        }

        dispatch(addFeedbackInList(userFeedback));
        commentRef.current.value = '';
        setRating(0);
        setHover(0);
    }
    
    return (
        <div className={styles.container}>
            <div className={styles["rating-container"]}>
                <div className={styles["stars"]}>
                    {
                        [...Array(5)].fill(0).map((num , idx) => {
                            return(
                                <FaGrinStars
                                    key={idx} 
                                    className={styles[`${ hover === 0 && idx < rating || idx < hover ? 'on' : 'off'}`]}
                                    onClick={() => setRating(idx + 1)}
                                    onMouseOver={() => setHover(idx + 1)}
                                    onMouseLeave={() => setHover(0)}
                                />
                            )
                        }) 
                    }
                </div>
                
                <div className={styles.comment}>
                    <p>Share your valuable feedback here! 👇</p>
                    <textarea ref={commentRef} placeholder='Share your delicious experience with us!' required/>
                </div>
                <button onClick={onSubmitBtnClick}>Submit</button>

            </div>
            <div className={styles["reviews-container"]}>
                {
                    review_list.map((item) => {
                        return (
                            <ReviewCard key={item.id} {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Reviews