import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import style from './MenuCard.module.css';

const MenuCard = (props) => {
  const { data: { id, name, description, price } } = props;

  const currency = useSelector(state => state.currency);
  const dispatch = useDispatch();

  return (
    <div className={style.card}>
      <img className={style.picture} src={require(`../../assets/pizza${id}.png`)} alt="pizza" />
      <h2 className={style.name}>{name}</h2>
      <p className={style.description}>{description}</p>
      <div className={style.wrapper}>
        <span className={style.price}>{`${price}${currency}`}</span>
        <button
          className={style.button}
          type="button"
          id={id}
          onClick={() => dispatch({ type: 'ADD_TO_CART', payload: id })}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

MenuCard.propTypes = {
  data: PropTypes.object,
};

MenuCard.defaultProps = {
  data: {},
};

export default MenuCard;
