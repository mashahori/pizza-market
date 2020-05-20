import { takeEvery, call, select } from 'redux-saga/effects';
import { submitOrderAction, emptyCartAction } from './actions';

const setLocalStorage = (getState) => {
  localStorage.setItem('order', JSON.stringify(getState.addedItems));
};

export function* handleOrder() {
  yield takeEvery(submitOrderAction, function* (){
    const getState = yield select();
    yield call(setLocalStorage, getState);
  });
}

const clearLocalStorage = (getState) => {
  localStorage.removeItem('order');
};

export function* emptyCart() {
  yield takeEvery(emptyCartAction, function* (){
    const getState = yield select();
    yield call(clearLocalStorage, getState);
  });
}
