import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { InventoryData } from '../data/inventory-data.js';
import { Credentials } from './credentials.js';
import { ShoppingCart } from './shopping-cart.js';

class CartItem extends Component {

    constructor(props) {
      super(props);

      this.item = props.item;
      this.state = {
          itemVisible: true
      }
      
      if (props.item == null) {
        // Hide this if the item is invalid
        this.state.itemVisible = false;
      }
    }

    removeFromCart(itemId) {
      ShoppingCart.removeItem(itemId);
      console.log(ShoppingCart.getCartContents());
      this.setState({itemVisible: false});
    }

    render () {
      
      if (this.state.itemVisible) {
        var linkId = this.item.id;
        if (Credentials.isProblemUser()) {
          linkId += 1; 
        }
        var itemLink = `./inventory-item.html?id=${linkId}`;
        
        return (
            <div class="cart_item">
              <div class="cart_quantity">1</div>
              <div class="cart_item_label">
                <a href={itemLink} id={`item_${this.item.id}_title_link`}>
                  <div class="inventory_item_name">{this.item.name}</div>
                </a>
                <div class="inventory_item_desc">{this.item.desc}</div>
                <div class="inventory_item_price">{this.item.price}</div>
                <button className="remove-from-cart-button" onClick={() => this.removeFromCart(this.item.id)}>REMOVE</button>
              </div>
            </div>
        );
      } else {
        return ( <div class="removed_cart_item"/> );
      }
    }
  }

  class CartContents extends Component {
    constructor(props) {
      super(props);
    }

    render () {
      
      var contents = ShoppingCart.getCartContents();

      return (
        <div>
        <div class="cart_list">
          <div class="cart_quantity_label">QTY</div>
          <div class="cart_desc_label">DESCRIPTION</div>
          {contents.map((item, i) => {
            return (<CartItem item={InventoryData.ITEMS[item]} />) 
          })}
        </div>
        <div class="cart_footer">
          <a class="cart_cancel_link" href="./inventory.html">CANCEL</a>
          <a class="cart_checkout_link" href="./checkout-step-one.html">CHECKOUT</a>
        </div>
        </div>
      );
    }
  }

export default CartContents;

const domContainer = document.getElementById('cart_contents_container');
domContainer ? ReactDOM.render(<CartContents />, domContainer) : false;