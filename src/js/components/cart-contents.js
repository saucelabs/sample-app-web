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
            <div className="cart_item">
              <div className="cart_quantity">1</div>
              <div className="cart_item_label">
                <a href={itemLink} id={`item_${this.item.id}_title_link`}>
                  <div className="inventory_item_name">{this.item.name}</div>
                </a>
                <div className="inventory_item_desc">{this.item.desc}</div>
                <div className="item_pricebar">
                  <div className="inventory_item_price">{this.item.price}</div>
                  <button className="btn_secondary cart_button" onClick={() => this.removeFromCart(this.item.id)}>REMOVE</button>
                </div>
              </div>
            </div>
        );
      } else {
        return ( <div className="removed_cart_item"/> );
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
        <div className="cart_list">
          <div className="cart_quantity_label">QTY</div>
          <div className="cart_desc_label">DESCRIPTION</div>
          {contents.map((item, i) => {
            return (<CartItem key={i} item={InventoryData.ITEMS[item]} />)
          })}
        </div>
        <div className="cart_footer">
          <a className="btn_secondary" href="./inventory.html">Continue Shopping</a>
          <a className="btn_action checkout_button" href="./checkout-step-one.html">CHECKOUT</a>
        </div>
        </div>
      );
    }
  }

export default CartContents;

const domContainer = document.getElementById('cart_contents_container');
domContainer ? ReactDOM.render(<CartContents />, domContainer) : false;
