import React, { useEffect, useRef, useState } from "react";
import HeaderContainer from "../components/HeaderContainer";
import SwagLabsFooter from "../components/Footer";
import LazyCatalogCard from "../components/LazyCatalogCard";
import { InventoryDataLong } from "../utils/InventoryDataLong";
import "./DynamicCatalogLazyLoad.css";

export const INITIAL_VISIBLE_COUNT = 6;
export const LOAD_MORE_BATCH_SIZE = 6;

const DynamicCatalogLazyLoad = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCount((current) => current + LOAD_MORE_BATCH_SIZE);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, [visibleCount]);

  const visibleItems = Array.from({ length: visibleCount }, (_, index) => ({
    ...InventoryDataLong[index % InventoryDataLong.length],
    index,
  }));

  return (
    <div id="page_wrapper" className="page_wrapper">
      <div id="contents_wrapper">
        <HeaderContainer secondaryTitle="Dynamic Catalog - Lazy Load" />
        <div
          className="dynamic_catalog_lazy_load_container"
          data-test="dynamic-catalog-lazy-load-container"
        >
          {visibleItems.map((item) => (
            <LazyCatalogCard
              key={item.index}
              item={item}
              testId={`lazy-load-item-${item.index}`}
            />
          ))}
        </div>
        <div
          ref={sentinelRef}
          className="dynamic_catalog_lazy_load_sentinel"
          data-test="dynamic-catalog-lazy-load-sentinel"
        />
      </div>
      <SwagLabsFooter />
    </div>
  );
};

export default DynamicCatalogLazyLoad;
