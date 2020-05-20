import React from 'react';
import Menu from './components/Menu';
import Cart from './components/Cart';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { pizzas } from './utils';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/menu" component={() => <Menu />} />
        <Route path="/cart" component={Cart} />
        <Redirect to="/menu" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
