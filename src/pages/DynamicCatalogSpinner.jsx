import React, { useEffect, useState } from "react";
import HeaderContainer from "../components/HeaderContainer";
import SwagLabsFooter from "../components/Footer";
import DynamicCatalogItemCard from "../components/DynamicCatalogItemCard";
import { InventoryData } from "../utils/InventoryData";
import "./DynamicCatalogSpinner.css";

export const MIN_SPINNER_DELAY_MS = 500;
export const MAX_SPINNER_DELAY_MS = 3000;

export function getRandomSpinnerDelay() {
  return (
    MIN_SPINNER_DELAY_MS +
    Math.random() * (MAX_SPINNER_DELAY_MS - MIN_SPINNER_DELAY_MS)
  );
}

const DynamicCatalogSpinner = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, getRandomSpinnerDelay());

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="page_wrapper" className="page_wrapper">
      <div id="contents_wrapper">
        <HeaderContainer secondaryTitle="Dynamic Catalog - Spinner" />
        <div
          className="dynamic_catalog_spinner_container"
          data-test="dynamic-catalog-spinner-container"
        >
          {isLoading ? (
            <div
              className="dynamic_catalog_spinner"
              data-test="dynamic-catalog-spinner"
              role="status"
              aria-label="Loading"
            />
          ) : (
            <div
              className="dynamic_catalog_spinner_grid"
              data-test="dynamic-catalog-spinner-grid"
            >
              {InventoryData.map((item) => (
                <DynamicCatalogItemCard
                  key={item.id}
                  item={item}
                  testId={`spinner-item-${item.id}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <SwagLabsFooter />
    </div>
  );
};

export default DynamicCatalogSpinner;
