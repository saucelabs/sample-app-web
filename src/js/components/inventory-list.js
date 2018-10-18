import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { InventoryData } from '../data/inventory-data.js';
import { Credentials } from './credentials.js';

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

    if (Credentials.isProblemUser()) {
      this.item_details.image_url = `${this.item_details.image_url}WithGarbageOnItToBreakTheUrl`
    }
  }
  
  render () {
    
    var linkId = this.item_details.id;
    if (Credentials.isProblemUser()) {
      linkId += 1; 
    }
    var itemLink = `./inventory-item.html?id=${linkId}`;

    return (
        <div class="inventory_item">
          <a href={itemLink} id={`item_${this.item_details.id}_img_link`}>
            <img class="inventory_item_img" src={this.item_details.image_url}/>
          </a>
          <div class="inventory_item_label">
          <a href={itemLink} id={`item_${this.item_details.id}_title_link`}>
            <div class="inventory_item_name">{this.item_details.name}</div>
          </a>
            <div class="inventory_item_desc">{this.item_details.desc}</div>
            <div class="inventory_item_price">{this.item_details.price}</div>
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
          return (<InventoryListItem id={i} image_url={item.image_url} name={item.name} desc={item.desc} price={item.price} />) 
        })}
      </div>
    );
  }
}

export default InventoryList;

const domContainer = document.getElementById('inventory_container');
domContainer ? ReactDOM.render(<InventoryList />, domContainer) : false;