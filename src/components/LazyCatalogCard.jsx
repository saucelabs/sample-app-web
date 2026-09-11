import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import DynamicCatalogItemCard from "./DynamicCatalogItemCard";

const LazyCatalogCard = ({ item, testId }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(nodeRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <DynamicCatalogItemCard
      ref={nodeRef}
      item={item}
      isLoaded={isLoaded}
      testId={testId}
    />
  );
};

LazyCatalogCard.propTypes = {
  /**
   * The item to render once it scrolls into view
   */
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
  /**
   * The base data-test id for this card
   */
  testId: PropTypes.string.isRequired,
};

export default LazyCatalogCard;
