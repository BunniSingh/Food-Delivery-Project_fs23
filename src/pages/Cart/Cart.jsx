import React from 'react'
import styles from './Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { IoIosAddCircle, IoMdRemoveCircle, } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

import { addItemCount, removeItemFromTheCart, subtractItemCount } from '../../slices/foodSlice';
import { getTotalCartAmount } from '../../calculationsFile/calculation';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import { Link } from 'react-router-dom';



const Cart = () => {
  const dispatch = useDispatch();

  const { food_list } = useSelector(state => state.food_data);
  const total = getTotalCartAmount(food_list);

  return (
    <div className={styles.container}>
      {
        total === 0 ? <EmptyCart />
          :
          <div className={styles['cart-items']}>
            <div className={styles['cart-items-title']}>
              <p>Item</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Totel</p>
              <p>Remove</p>
            </div>
            <br />
            <hr />
            {
              food_list.map((item, idx) => {
                if (item.count > 0) {
                  return (
                    <>
                      <div key={idx} className={styles['cart-items-title']} id={styles['cart-selected-items']}>
                        <img src={item.image} alt="food_item_img" />
                        <p>{item.name}</p>
                        <p>₹{item.price}</p>
                        {/* <p>{item.count}</p> */}
                        <div className={styles['food-item-counter']}>
                          <IoMdRemoveCircle onClick={() => dispatch(subtractItemCount(item._id))} className={styles['remove-icon']} />
                          <p>{item.count}</p>
                          <IoIosAddCircle onClick={() => dispatch(addItemCount(item._id))} className={styles['add-icon']} />
                        </div>
                        <p>₹{item.count * item.price}</p>
                        <p><MdDeleteForever onClick={() => dispatch(removeItemFromTheCart(item._id))} className={styles['remove-btn']} /></p>
                      </div>
                      <hr />
                    </>
                  )
                }
              })
            }
          </div>
      }
      <div className={styles['bottom-cart-container']}>
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
              {total !== 0 ? <b>{total > 300 ? total : total + 50}</b> : <p>₹0</p>}
            </div>
            {total !== 0 && <button className={styles["check-out-btn"]}>
              <Link to={'/place_order'}>proceed to checkout</Link>
            </button>}
          </div>
        </div>
        <div className={styles['cart-promocode']}>
          <p>Unlock exclusive discounts on your favorite meals! Apply a promo code at checkout and save big on your cart total.🎉</p>
          <div className={styles.promocode}>
            <input type="text" placeholder='Promocode' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart