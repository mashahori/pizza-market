import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './modules/reducers';
import createSagaMiddleWare from 'redux-saga';
import { handleOrder, emptyCart } from './modules/sagas';

const sagaMiddleWare = createSagaMiddleWare();

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleWare),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (noop) => noop,
    ),
  );
  sagaMiddleWare.run(handleOrder);
  sagaMiddleWare.run(emptyCart);

  return store;
};

export default createAppStore;
