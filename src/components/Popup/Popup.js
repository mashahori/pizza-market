import React from 'react';
import style from './Popup.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Popup = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={style.overlay}>
      </div>
      <div className={style.popup}>
        <h1 className={style.title}>Success!</h1>
        <Link to="/">
          <button className={style.button} type="button" onClick={() => dispatch({ type: 'EMPTY_CART' })}>Menu</button>
        </Link>
      </div>
    </>
)};

export default Popup;
