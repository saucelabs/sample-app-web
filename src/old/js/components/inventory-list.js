import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { InventoryData } from '../data/inventory-data.js';
import { Credentials } from './credentials.js';
import { ShoppingCart } from './shopping-cart.js';

class InventoryListItem extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      id: props.id,
      image_url: props.image_url,
      name: props.name,
      desc: props.desc,
      price: props.price,
      // Set our initial state now
      itemInCart: ShoppingCart.isItemInCart(props.id)
    };

    if (Credentials.isProblemUser()) {
      this.state.image_url = `${this.state.image_url}WithGarbageOnItToBreakTheUrl`
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
    
    var linkId = this.state.id;
    if (Credentials.isProblemUser()) {
      linkId += 1; 
    }
    var itemLink = `./inventory-item.html?id=${linkId}`;

    var cartButton;
    
    if (this.state.itemInCart) {
      cartButton = <button className="btn_secondary btn_inventory" onClick={() => this.removeFromCart(this.state.id)}>REMOVE</button>;
    } else {
      cartButton = <button className="btn_primary btn_inventory" onClick={() => this.addToCart(this.state.id)}>ADD TO CART</button>;
    }

    return (
        <div class="inventory_item">
          <div class="inventory_item_img">
            <a href={itemLink} id={`item_${this.state.id}_img_link`}>
              <img class="inventory_item_img" src={this.state.image_url}/>
            </a>
          </div>
          <div class="inventory_item_label">
            <a href={itemLink} id={`item_${this.state.id}_title_link`}>
              <div class="inventory_item_name">{this.state.name}</div>
            </a>
            <div class="inventory_item_desc">{this.state.desc}</div>
          </div>
          <div class="pricebar">
              <div class="inventory_item_price">${this.state.price}</div>
              { cartButton }
          </div>
        </div>
    );
  }
}

class InventoryList extends Component {
  constructor(props) {
    super(props);
    if (Credentials.isPerformanceGlitchUser()) {
      this.startPerformanceGlitch(5000);
    }

    this.state = {
        inventoryList: InventoryData.ITEMS_NAME_AZ
    };

    this.sortByOption = this.sortByOption.bind(this);
    this.sortNameAZ = this.sortNameAZ.bind(this);
    this.sortNameZA = this.sortNameZA.bind(this);
    this.sortPriceLoHi = this.sortPriceLoHi.bind(this);
    this.sortPriceHiLo = this.sortPriceHiLo.bind(this);
  }

  startPerformanceGlitch(duration) {
    const start = new Date().getTime();
    while (new Date().getTime() < start + duration) {
      // PageLoad increases
    }
  }

  sortByOption(event) {

    console.log(event);

    if (Credentials.isProblemUser()) {
      // Bail out now if we're problem user so that we have a behaviour which is broken in Chrome only for sort.
      // select option onclick is not supported in Chrome but works in IE and FF
      return;
    }

    switch (event.target.value) {
      case "az":

        this.setState({
          inventoryList: InventoryData.ITEMS_NAME_AZ
        });
        break;

      case "za":

        this.setState({
          inventoryList: InventoryData.ITEMS_NAME_ZA
        });
        break;

      case "hilo":

        this.setState({
          inventoryList: InventoryData.ITEMS_PRICE_HILO
        });
        break;

      case "lohi":

        this.setState({
          inventoryList: InventoryData.ITEMS_PRICE_LOHI
        });
        break;
    }
  }

  sortNameAZ() {
    if (!Credentials.isProblemUser()) {
      // Bail out now if we're not problem user - the select onchange will handle the sort
      return;
    }

    this.setState({
      inventoryList: InventoryData.ITEMS_NAME_AZ
    });
  }

  sortNameZA() {
    if (!Credentials.isProblemUser()) {
      // Bail out now if we're not problem user - the select onchange will handle the sort
      return;
    }

    this.setState({
      inventoryList: InventoryData.ITEMS_NAME_ZA
    });
  }

  sortPriceLoHi() {
    if (!Credentials.isProblemUser()) {
      // Bail out now if we're not problem user - the select onchange will handle the sort
      return;
    }

    this.setState({
      inventoryList: InventoryData.ITEMS_PRICE_LOHI
    });
  }

  sortPriceHiLo() {
    if (!Credentials.isProblemUser()) {
      // Bail out now if we're not problem user - the select onchange will handle the sort
      return;
    }

    this.setState({
      inventoryList: InventoryData.ITEMS_PRICE_HILO
    });
  }
  
  render () {

    // NOTE: Sorting is broken on Chrome and Safari
    // https://stackoverflow.com/questions/9972280/onclick-on-option-tag-not-working-on-ie-and-chrome/10058960#10058960
    // TODO: Convert this in to a case for problem_user

    return (
      <div>
      <div class="header_secondary_container">
        <div class="peek"></div>
        <div id="searchbox_container"></div>
        <div id="inventory_filter_container">
          <div class="product_label">Products</div>
          <select onChange={this.sortByOption} class="product_sort_container">
            <option value="az" onClick={this.sortNameAZ}>Name (A to Z)</option>
            <option value="za" onClick={this.sortNameZA}>Name (Z to A)</option>
            <option value="lohi" onClick={this.sortPriceLoHi}>Price (low to high)</option>
            <option value="hilo" onClick={this.sortPriceHiLo}>Price (high to low)</option>
          </select>
        </div>
      </div>
  
      <div id="inventory_container" class="inventory_container">

      <div class="inventory_list">
        {this.state.inventoryList.map((item, i) => {     
          return (<InventoryListItem key={item.id} id={item.id} image_url={item.image_url} name={item.name} desc={item.desc} price={item.price} />) 
        })}
      </div>
      
      </div>
      </div>
    );
  }
}

export default InventoryList;

const domContainer = document.getElementById('inventory_container');
domContainer ? ReactDOM.render(<InventoryList />, domContainer) : false;
