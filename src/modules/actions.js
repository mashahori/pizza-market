import { createAction } from 'redux-actions';

export const addToCartAction = createAction('ADD_TO_CART');
export const submitOrderAction = createAction('SUBMIT_ORDER');
export const emptyCartAction = createAction('EMPTY_CART');
export const decreaseCountAction = createAction('DECREASE');
export const increaseCountAction = createAction('INCREASE');
export const deleteItemtAction = createAction('DELETE');
