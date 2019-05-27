import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { InventoryData } from '../data/inventory-data.js';
import { Credentials } from './credentials.js';
import { ShoppingCart } from './shopping-cart.js';

class InventoryItem extends Component {

  constructor(props) {
    super(props);

    // Get our queryparams now
    var queryParams = new URLSearchParams(window.location.search);
    var inventoryId = -1;
    if (queryParams.has('id')) {
      inventoryId = parseInt(queryParams.get('id'));
    }
    if ((inventoryId >= 0) && (InventoryData.ITEMS.length > inventoryId)) {
      this.item = InventoryData.ITEMS[inventoryId];
    } else {
      this.item = {
          name: 'ITEM NOT FOUND',
          desc: `We're sorry, but your call could not be completed as dialled.
          Please check your number, and try your call again.
          If you are in need of assistance, please dial 0 to be connected with an operator.
          This is a recording.
          4 T 1.`,
          image_url: './img/sl-404.jpg',
          price: '√-1'
          
      };
    }
    this.item.id = inventoryId;
    
    this.state = {
      // Set our initial state now
      itemInCart: ShoppingCart.isItemInCart(inventoryId)
    };
  }

  goBack() {
    window.history.back();
  }

  addToCart(itemId) {

    if (Credentials.isProblemUser()) {
      // Bail out now, don't add to cart if the item ID is odd
      if (itemId % 2 == 1) {
        return;
      }
    }

    ShoppingCart.addItem(itemId);
    this.setState({itemInCart: true});
    console.log(ShoppingCart.getCartContents());
  }

  removeFromCart(itemId) {

    if (Credentials.isProblemUser()) {
      // Bail out now, don't remove from cart if the item ID is even
      if (itemId % 2 == 0) {
        return;
      }
    }

    ShoppingCart.removeItem(itemId);
    this.setState({itemInCart: false});
    console.log(ShoppingCart.getCartContents());
  }

  render () {

    var cartButton;
    
    if (this.state.itemInCart) {
      cartButton = <button className="btn_secondary btn_inventory" onClick={() => this.removeFromCart(this.item.id)}>REMOVE</button>;
    } else {
      cartButton = <button className="btn_primary btn_inventory" onClick={() => this.addToCart(this.item.id)}>ADD TO CART</button>;
    }

    return (
      <div class="inventory_details">
        <button class="inventory_details_back_button" onClick={this.goBack}>&lt;- Back</button>
        <div class="inventory_details_container">
          <img class="inventory_details_img" src={this.item.image_url}/>
          <div class="inventory_details_desc_container">
            <div class="inventory_details_name">{this.item.name}</div>
            <div class="inventory_details_desc">{this.item.desc}</div>
            <div class="inventory_details_price">${this.item.price}</div>
            { cartButton }
          </div>
        </div>
      </div>
    );
  }
}

export default InventoryItem;

const domContainer = document.getElementById('inventory_item_container');
domContainer ? ReactDOM.render(<InventoryItem />, domContainer) : false;