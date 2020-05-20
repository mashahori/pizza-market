import React from 'react';
import Menu from './components/Menu';
import Cart from './components/Cart';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/" component={Menu} />
        <Route path="*" component={Menu} />
        <Redirect path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
