import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { InventoryData } from '../data/inventory-data.js';
import { Credentials } from './credentials.js';
import { ShoppingCart } from './shopping-cart.js';

class InventoryListItem extends Component {

  constructor(props) {
    super(props);
    
    this.item_details = {
      id: props.id,
      image_url: props.image_url,
      name: props.name,
      desc: props.desc,
      price: props.price
    };
    
    this.state = {
      // Set our initial state now
      itemInCart: ShoppingCart.isItemInCart(props.id)
    };

    if (Credentials.isProblemUser()) {
      this.item_details.image_url = `${this.item_details.image_url}WithGarbageOnItToBreakTheUrl`
    }
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
    
    var linkId = this.item_details.id;
    if (Credentials.isProblemUser()) {
      linkId += 1; 
    }
    var itemLink = `./inventory-item.html?id=${linkId}`;

    var cartButton;
    
    if (this.state.itemInCart) {
      cartButton = <button className="remove-from-cart-button" onClick={() => this.removeFromCart(this.item_details.id)}>REMOVE</button>;
    } else {
      cartButton = <button className="add-to-cart-button" onClick={() => this.addToCart(this.item_details.id)}>ADD TO CART</button>;
    }

    return (
        <div class="inventory_item">
          <div class="inventory_item_img">
            <a href={itemLink} id={`item_${this.item_details.id}_img_link`}>
              <img class="inventory_item_img" src={this.item_details.image_url}/>
            </a>
          </div>
          <div class="inventory_item_label">
            <a href={itemLink} id={`item_${this.item_details.id}_title_link`}>
              <div class="inventory_item_name">{this.item_details.name}</div>
            </a>
            <div class="inventory_item_desc">{this.item_details.desc}</div>
          </div>
          <div class="pricebar">
              <div class="inventory_item_price">${this.item_details.price}</div>
              { cartButton }
          </div>
        </div>
    );
  }
}

class InventoryList extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div class="inventory_list">
        {InventoryData.ITEMS.map((item, i) => {     
          return (<InventoryListItem id={item.id} image_url={item.image_url} name={item.name} desc={item.desc} price={item.price} />) 
        })}
      </div>
    );
  }
}

export default InventoryList;

const domContainer = document.getElementById('inventory_container');
domContainer ? ReactDOM.render(<InventoryList />, domContainer) : false;