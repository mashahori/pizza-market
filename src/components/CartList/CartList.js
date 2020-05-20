import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './CartList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import Popup from '../Popup';
import CartItem from '../CartItem';

const CartList = (props) => {
  const [ ordered, setOrdered ] = useState(false);

  const addedItems = useSelector(state => state.addedItems);
  const total = useSelector(state => state.total);
  const delivery = useSelector(state => state.delivery);
  const currency = useSelector(state => state.currency);

  const dispatch = useDispatch();

  const handleSubmit = (orderedItems) => {
    setOrdered(true);
    dispatch({ type: 'SUBMIT_ORDER', payload: orderedItems });
  };

  return (
    <>
      <div className={style.container} >
        <ul className={style.list}>
          {addedItems.map((el, index) => (
            <li className={style.item} key={index}>
              <CartItem item={el} />
            </li>
          ))}
        </ul>
        <ul className={style.payment}>
          <li className={style.payment__item}><span>Subtotal:</span><span>{`${total}${currency}`}</span></li>
          <li className={style.payment__item}><span>Delivery</span><span>{`${delivery}${currency}`}</span></li>
          <li className={style.payment__item}><span>Total</span><span>{`${total + delivery}${currency}`}</span></li>
          <li className={style.payment__item}>
            <button className={style.button} type="button" onClick={(addedItems) =>handleSubmit(addedItems)}>
              Submit order
            </button>
          </li>
        </ul>
      </div>
      {ordered && <Popup />}
    </>
  );
};

export default CartList;
