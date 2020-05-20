import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import style from './Cart.module.css';
import { useSelector } from 'react-redux';
import CartList from '../CartList';

const Cart = (props) => {
  const addedItems = useSelector(state => state.addedItems);

  return (
    <>
      <Header link="menu" />
      <div className={style.cart}>
        <h1 className={style.title}>Cart</h1>
        {addedItems.length ? (
          <CartList />
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
