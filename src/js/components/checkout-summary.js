import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { InventoryData } from '../data/inventory-data.js';
import { Credentials } from './credentials.js';
import { ShoppingCart } from './shopping-cart.js';

class SummaryItem extends Component {

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

    render () {
      
      if (this.state.itemVisible) {
        var linkId = this.item.id;
        if (Credentials.isProblemUser()) {
          linkId += 1; 
        }
        var itemLink = `./inventory-item.html?id=${linkId}`;
        
        return (
            <div class="cart_item">
              <div class="summary_quantity">1</div>
              <div class="cart_item_label">
                <a href={itemLink} id={`item_${this.item.id}_title_link`}>
                  <div class="inventory_item_name">{this.item.name}</div>
                </a>
                <div class="inventory_item_desc">{this.item.desc}</div>
                <div class="inventory_item_price">${this.item.price}</div>
              </div>
            </div>
        );
      } else {
        return ( <div class="removed_cart_item"/> );
      }
    }
  }

  class CheckoutSummary extends Component {
    constructor(props) {
      super(props);
    }

    clearCart() {
      // No cart clear on order complete for the problem user
      if (!Credentials.isProblemUser()) {
        // Wipe out our shopping cart
        ShoppingCart.resetCart();
      }
    }
    
    render () {
      
      var contents = ShoppingCart.getCartContents();
      var orderTotal = 0;
      
      for (var curItem in contents) {
        orderTotal = orderTotal + InventoryData.ITEMS[contents[curItem]].price;
        if (Credentials.isProblemUser()) {
          // double up for the problem user
          orderTotal = orderTotal + InventoryData.ITEMS[curItem].price;
        }
      }

      var orderTax = (orderTotal * 0.08).toFixed(2);
      
      return (
        <div>
          <div class="cart_list">
            <div class="cart_quantity_label">QTY</div>
            <div class="cart_desc_label">DESCRIPTION</div>
            {contents.map((item, i) => {
              return (<SummaryItem item={InventoryData.ITEMS[item]} />) 
            })}
          </div>
          <div class="summary_info">
            <div class="summary_info_label">Payment Information:</div>
            <div class="summary_value_label">SauceCard #31337</div>
            <div class="summary_info_label">Shipping Information:</div>
            <div class="summary_value_label">FREE PONY EXPRESS DELIVERY!</div>
            <div class="summary_subtotal_label">Item total: ${orderTotal}</div>
            <div class="summary_tax_label">Tax: ${orderTax}</div>
            <div class="summary_total_label">Total: ${(orderTotal + parseFloat(orderTax)).toFixed(2)}</div>
            <div class="cart_footer">
              <a class="cart_cancel_link" href="./inventory.html">CANCEL</a>
              <a class="cart_checkout_link" href="./checkout-complete.html" onClick={this.clearCart}>FINISH</a>
            </div>
          </div>
        </div>
      );
    }
  }

export default CheckoutSummary;

const domContainer = document.getElementById('checkout_summary_container');
domContainer ? ReactDOM.render(<CheckoutSummary />, domContainer) : false;