import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { slide as Menu } from 'react-burger-menu';
import { Credentials } from './credentials.js';

class MenuButton extends Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <Menu pageWrapId={ "contents_wrapper" } outerContainerId={ "page_wrapper" }>
        <a id="inventory_sidebar_link" className="menu-item" href="./inventory.html">All Items</a>
        <a id="about_sidebar_link" className="menu-item" href={ Credentials.isProblemUser() ? "https://saucelabs.com/error/404" : "https://saucelabs.com/" }>About</a>
        <a id="logout_sidebar_link" className="menu-item" href="./index.html">Logout</a>
      </Menu>
    );
  }
}

export default MenuButton;

const domContainer = document.getElementById('menu_button_container');
domContainer ? ReactDOM.render(<MenuButton />, domContainer) : false;