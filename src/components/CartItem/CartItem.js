import React from 'react';
import style from './CartItem.module.css';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
  const { item: { id, name, quantity, price } } = props;

  const dispatch = useDispatch();

  return (
    <div className={style.card}>
      <img className={style.picture} src={require(`../../assets/pizza${id}.png`)} alt="pizza" />
      <h2 className={style.name}>{name}</h2>
      <div className={style.wrapper}>
        <span className={style.price}>{`${price}$`}</span>
        <button
          className={style.toggle}
          type="button"
          id={id}
          onClick={() => dispatch({ type: 'DECREASE', payload: id })}
          disabled={quantity === 1}
        >
         -
        </button>
        <span className={style.quantity}>{quantity}</span>
        <button className={style.toggle} type="button" id={id} onClick={() => dispatch({ type: 'INCREASE', payload: id })}>
         +
        </button>
      </div>
      <button className={style.button} type="button" id={id} onClick={() => dispatch({ type: 'DELETE', payload: id })}>
        <img src={require('../../assets/can.png')} alt="Delete" />
      </button>
    </div>
  );
};

export default CartItem;
