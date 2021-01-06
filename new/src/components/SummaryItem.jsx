import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { isProblemUser } from "../utils/Credentials";
import "./SummaryItem.css";
import { ROUTES } from "../utils/Constants";

function SummaryItem(props) {
  const { history } = props;
  const [itemVisible, setItemVisible] = useState(true);
  const { item } = props;

  if (item == null) {
    // Hide this if the item is invalid
    setItemVisible(false);
  }

  if (itemVisible) {
    let linkId = item.id;
    if (isProblemUser()) {
      linkId += 1;
    }
    const itemLink = `${ROUTES.INVENTORY_LIST}?id=${linkId}`;

    return (
      <div className="cart_item">
        <div className="summary_quantity">1</div>
        <div className="cart_item_label">
          <a
            href="#"
            id={`item_${item.id}_title_link`}
            onClick={(evt) => {
              evt.preventDefault();
              history.push(itemLink);
            }}
          >
            <div className="inventory_item_name">{item.name}</div>
          </a>
          <div className="inventory_item_desc">{item.desc}</div>
          <div className="inventory_item_price">${item.price}</div>
        </div>
      </div>
    );
  }

  return <div className="removed_cart_item" />;
}

export default withRouter(SummaryItem);
