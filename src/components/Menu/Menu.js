import React from 'react';
import MenuCard from '../MenuCard';
import Header from '../Header';
import style from './Menu.module.css';
import { useSelector } from 'react-redux'

const Menu = () => {
  const pizzasList = useSelector(state => state.items);
  return (
    <>
      <Header link="cart" />
      <div className={style.menu}>
        <h1 className={style.title}>Pizza</h1>
        <ul className={style.pizzas}>
          {pizzasList.map(item => <li className={style.card} key={item.name}><MenuCard data={item} /></li>)}
        </ul>
        <div className={style.copyright}>
          Designed by <a href="https://www.behance.net/katematefr34cd">Catherine T.</a>
        </div>
      </div>
    </>
  );
};

export default Menu;
