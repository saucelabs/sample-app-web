import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  isErrorUser,
  isPerformanceGlitchUser,
  isProblemUser,
  isVisualUser,
} from "../utils/Credentials";
import { InventoryData } from "../utils/InventoryData.js";
import InventoryListItem from "../components/InventoryListItem";
import SwagLabsFooter from "../components/Footer";
import HeaderContainer from "../components/HeaderContainer";
import { sortAsc, sortDesc, sortHiLo, sortLoHi } from "../utils/Sorting";
import Select from "../components/Select";
import "./Inventory.css";
import { BacktraceClient } from "@backtrace-labs/react";

const Inventory = () => {
  const [inventoryList, setInventoryList] = useState(
    sortAsc(InventoryData, "name")
  );
  const [activeOption, setActiveOption] = useState("az");
  /* istanbul ignore next */
  const startPerformanceGlitch = (duration) => {
    const start = new Date().getTime();
    while (new Date().getTime() < start + duration) {
      // PageLoad increases
    }
  };
  const isVisualFailure = isVisualUser();

  /* istanbul ignore next */
  if (isPerformanceGlitchUser()) {
    startPerformanceGlitch(5000);
  }

  /**
   * @TODO:
   * This can't be tested yet because enzyme currently doesn't support ReactJS17,
   * see https://github.com/enzymejs/enzyme/issues/2429.
   * This means we can't fully mount the component and test all rendered components
   * and functions
   */
  /* istanbul ignore next */
  const sortByOption = (event) => {
    if (isProblemUser()) {
      // Bail out now if we're problem user so that we have a behaviour which is broken in Chrome only for sort.
      // select option onclick is not supported in Chrome but works in IE and FF
      return;
    } else if (isErrorUser()) {
      // Send an error with custom attributes to Backtrace
      BacktraceClient.instance.send("Sorting is broken!", {
        sortOption: event.target.value,
        InventoryData,
      });
      return alert(
        "Sorting is broken! This error has been reported to Backtrace."
      );
    }

    setActiveOption(event.target.value);

    switch (event.target.value) {
      case "az":
        setInventoryList(sortAsc(InventoryData, "name"));
        break;
      case "za":
        setInventoryList(sortDesc(InventoryData, "name"));
        break;
      case "hilo":
        setInventoryList(sortHiLo(InventoryData, "price"));
        break;
      case "lohi":
        setInventoryList(sortLoHi(InventoryData, "price"));
        break;
      default:
        return;
    }
  };

  return (
    <div id="page_wrapper" className="page_wrapper">
      <div id="contents_wrapper">
        <HeaderContainer
          secondaryTitle="Products"
          secondaryRightComponent={
            <Select
              activeOption={activeOption}
              options={[
                { key: "az", value: "Name (A to Z)" },
                { key: "za", value: "Name (Z to A)" },
                { key: "lohi", value: "Price (low to high)" },
                { key: "hilo", value: "Price (high to low)" },
              ]}
              onChange={sortByOption}
              testId="product_sort_container"
            />
          }
        />
        <div id="inventory_container">
          <div>
            <div id="inventory_container" className="inventory_container">
              <div className="inventory_list">
                {inventoryList.map((item, i) => {
                  return (
                    <InventoryListItem
                      key={item.id}
                      id={item.id}
                      image_url={
                        isProblemUser() || (isVisualFailure && i === 0)
                          ? "sl-404.jpg"
                          : item.image_url
                      }
                      name={item.name}
                      desc={item.desc}
                      price={item.price}
                      isTextAlignRight={isVisualFailure && i > 1 && i < 4}
                      missAlignButton={isVisualFailure && i === 5}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SwagLabsFooter />
    </div>
  );
};

export default withRouter(Inventory);
