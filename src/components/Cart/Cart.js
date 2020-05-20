import React from 'react';
import Header from '../Header';
import style from './Cart.module.css';
import { useSelector, useDispatch } from 'react-redux';
import CartList from '../CartList';

const Cart = () => {
  const addedItems = useSelector(state => state.addedItems);
  const dispatch = useDispatch();

  return (
    <>
      <Header link="menu" />
      <div className={style.cart}>
        <h1 className={style.title}>Cart</h1>
        {addedItems.length ? (
          <>
            <select
              className={style.currency}
              onChange={(e) => dispatch({ type: 'CHANGE_CURRENCY', payload: e.target.value })}
            >
              <option value="$">USD</option>
              <option value="€">EUR</option>
            </select>
            <CartList />
          </>
          ) : (
            <div>
              <span className={style.empty}>No pizza here...</span>
            </div>
        )}
      </div>
    </>
  );
};

export default Cart;
