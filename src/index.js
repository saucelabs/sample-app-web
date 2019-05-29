import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Login from './pages/Login';
import Inventory from './pages/Inventory';
import InventoryItem from './pages/InventoryItem';
import Cart from './pages/Cart';
import CheckOutStepOne from './pages/CheckOutStepOne';
import CheckOutStepTwo from './pages/CheckOutStepTwo';
import Finish from './pages/Finish';
import { ROUTES } from './utils/Constants';

const routing = (
  <Router>
    <div>
      <Route exact path={ROUTES.LOGIN} component={ Login }/>
      <Route path={ ROUTES.INVENTORY } component={ Inventory }/>
      <Route path={ ROUTES.INVENTORY_LIST } component={ InventoryItem }/>
      <Route path={ ROUTES.CART } component={ Cart }/>
      <Route path={ ROUTES.CHECKOUT_STEP_ONE } component={ CheckOutStepOne }/>
      <Route path={ ROUTES.CHECKOUT_STEP_TWO } component={ CheckOutStepTwo }/>
      <Route path={ ROUTES.CHECKOUT_COMPLETE } component={ Finish }/>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
