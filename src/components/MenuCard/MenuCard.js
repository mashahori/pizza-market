import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './MenuCard.module.css';
import { addToCartAction } from '../../modules/actions';

const MenuCard = (props) => {
  const { addToCart, data: { id, name, description, price } } = props;

  const addPizza = (e) => {
    addToCart(e.target.id);
  };

  return (
    <div className={style.card}>
      <img className={style.picture} src={`img/pizza${id}.png`} alt="pizza" />
      <h2 className={style.name}>{name}</h2>
      <p className={style.description}>{description}</p>
      <div className={style.wrapper}>
        <span className={style.price}>{`${price}$`}</span>
        <button className={style.button} type="button" id={id} onClick={addPizza}>Add to cart</button>
      </div>
    </div>
  );
};

MenuCard.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.string),
};

MenuCard.defaultProps = {
  routes: [],
};

const mapDispathToProps = (dispatch) => ({
  addToCart: (id) => dispatch(addToCartAction(id)),
});

export default connect(null, mapDispathToProps)(MenuCard);
