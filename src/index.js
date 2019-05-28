import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Login from './pages/Login'
import Inventory from './pages/Inventory'
import InventoryItem from './pages/InventoryItem'
import Cart from './pages/Cart'
import CheckOutStepOne from './pages/CheckOutStepOne'
import CheckOutStepTwo from './pages/CheckOutStepTwo'
import Finish from './pages/Finish'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={ Login }/>
      <Route path="/inventory.html" component={ Inventory }/>
      <Route path="/inventory-item.html" component={ InventoryItem }/>
      <Route path="/cart.html" component={ Cart }/>
      <Route path="/checkout-step-one.html" component={ CheckOutStepOne }/>
      <Route path="/checkout-step-two.html" component={ CheckOutStepTwo }/>
      <Route path="/checkout-complete.html" component={ Finish }/>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
