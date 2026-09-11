import React, { useEffect, useState } from "react";
import HeaderContainer from "../components/HeaderContainer";
import SwagLabsFooter from "../components/Footer";
import DynamicCatalogItemCard from "../components/DynamicCatalogItemCard";
import { InventoryData } from "../utils/InventoryData";
import "./DynamicCatalogSlider.css";

export const SLIDER_INTERVAL_MS = 2000;

const DynamicCatalogSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % InventoryData.length);
    }, SLIDER_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  const activeItem = InventoryData[activeIndex];

  return (
    <div id="page_wrapper" className="page_wrapper">
      <div id="contents_wrapper">
        <HeaderContainer secondaryTitle="Dynamic Catalog - Slider" />
        <div
          className="dynamic_catalog_slider_container"
          data-test="dynamic-catalog-slider-container"
        >
          <DynamicCatalogItemCard
            item={activeItem}
            testId="dynamic-catalog-slider-item"
          />
          <div
            className="dynamic_catalog_slider_dots"
            data-test="dynamic-catalog-slider-dots"
          >
            {InventoryData.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`dynamic_catalog_slider_dot${
                  index === activeIndex ? " active" : ""
                }`}
                aria-label={`Show ${item.name}`}
                aria-current={index === activeIndex}
                data-test={`dynamic-catalog-slider-dot-${index}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <SwagLabsFooter />
    </div>
  );
};

export default DynamicCatalogSlider;
