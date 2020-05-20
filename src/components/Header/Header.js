import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux'

const Header = ({ link }) => {
  const count = useSelector(state => state.totalQuantity);
  const dispatch = useDispatch();
  return (
    <div className={style.header}>
      { link === 'cart' ? (
        <div className={style.menu}>
          <div className={style.link_menu}>
            Menu
          </div>
          <Link className={style.link} to={`/${link}`}>
            <img src={require('../../assets/cart.png')} alt="Cart" />
            <span className={style.count}>{count}</span>
          </Link>
        </div>
      ) : (
        <div className={style.menu}>
          <Link className={style.link_menu} to={`/`}>
            Menu
          </Link>
          <select onChange={(e) => dispatch({ type: 'CHANGE_CURRENCY', payload: e.target.value })}>
            <option value="$">USD</option>
            <option value="€">EUR</option>
          </select>
          <div className={style.link}>
            <img src={require('../../assets/cart.png')} alt="Cart" />
            <span className={style.count}>{count}</span>
          </div>
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  link: PropTypes.string.isRequired,
}

export default Header;
