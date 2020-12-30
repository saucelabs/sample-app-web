import React, { useState} from "react";
import { withRouter} from "react-router-dom";
import { isPerformanceGlitchUser, isProblemUser} from "../utils/Credentials";
import {InventoryData} from '../utils/inventory-data.js';
import InventoryListItem from "../components/InventoryListItem";
import SwagLabsFooter from "../components/Footer";
import HeaderContainer from "../components/HeaderContainer";
import './Inventory.css'


function Inventory() {
  const [inventoryList, setInventoryList] = useState(InventoryData.ITEMS_NAME_AZ);
  const startPerformanceGlitch = (duration) => {
    const start = new Date().getTime();
    while (new Date().getTime() < start + duration) {
      // PageLoad increases
    }
  }
  if (isPerformanceGlitchUser()) {
    startPerformanceGlitch(5000);
  }
  const sortByOption = (event) => {
    console.log(event);
    if (isProblemUser()) {
      // Bail out now if we're problem user so that we have a behaviour which is broken in Chrome only for sort.
      // select option onclick is not supported in Chrome but works in IE and FF
      return;
    }

    switch (event.target.value) {
      case "az":
        setInventoryList(InventoryData.ITEMS_NAME_AZ);
        break;

      case "za":
        setInventoryList(InventoryData.ITEMS_NAME_ZA);
        break;

      case "hilo":
        setInventoryList(InventoryData.ITEMS_PRICE_HILO);
        break;

      case "lohi":
        setInventoryList(InventoryData.ITEMS_PRICE_LOHI);
        break;
    }
  }
  const sortNameAZ = () => {
    if (isProblemUser()) {
      // Bail out now if we're not problem user - the select onchange will handle the sort
      return;
    }

    setInventoryList(InventoryData.ITEMS_NAME_AZ);
  }
  const sortNameZA = () => {
    if (isProblemUser()) {
      // Bail out now if we're not problem user - the select onchange will handle the sort
      return;
    }

    setInventoryList(InventoryData.ITEMS_NAME_ZA);
  }
  const sortPriceLoHi = () => {
    if (!isProblemUser()) {
      // Bail out now if we're not problem user - the select onchange will handle the sort
      return;
    }

    setInventoryList(InventoryData.ITEMS_PRICE_LOHI);
  }
  const sortPriceHiLo = () => {
    if (!isProblemUser()) {
      // Bail out now if we're not problem user - the select onchange will handle the sort
      return;
    }

    setInventoryList(InventoryData.ITEMS_PRICE_HILO);
  }

  return (
    <div id="page_wrapper" className="page_wrapper">
      <div id="contents_wrapper">
        <HeaderContainer/>
        <div id="inventory_container">
          <div>
            <div className="header_secondary_container">
              <div className="peek"></div>
              <div id="inventory_filter_container">
                <div className="product_label">Products</div>
                <select onChange={sortByOption} className="product_sort_container">
                  <option value="az" onClick={sortNameAZ}>Name (A to Z)</option>
                  <option value="za" onClick={sortNameZA}>Name (Z to A)</option>
                  <option value="lohi" onClick={sortPriceLoHi}>Price (low to high)</option>
                  <option value="hilo" onClick={sortPriceHiLo}>Price (high to low)</option>
                </select>
              </div>
            </div>

            <div id="inventory_container" className="inventory_container">

              <div className="inventory_list">
                {inventoryList.map((item, i) => {
                  return (
                    <InventoryListItem
                      key={item.id}
                      id={item.id}
                      image_url={item.image_url}
                      name={item.name}
                      desc={item.desc}
                      price={item.price}
                    />)
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
      <SwagLabsFooter/>
    </div>
  );
}

export default withRouter(Inventory);
