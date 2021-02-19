import React from "react";
import { withRouter } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { ShoppingCart } from "../utils/shopping-cart";
import { ROUTES } from "../utils/Constants";
import { isProblemUser, removeCredentials } from "../utils/Credentials";
import "./HeaderMenuButton.css";

function MenuButton(props) {
  const { history } = props;
  const resetStorage = () => {
    // Wipe out our shopping cart now
    ShoppingCart.resetCart();
  };

  return (
    <Menu pageWrapId={"contents_wrapper"} outerContainerId={"page_wrapper"}>
      <a
        id="inventory_sidebar_link"
        className="menu-item"
        href="#"
        onClick={(evt) => {
          evt.preventDefault();
          history.push(ROUTES.INVENTORY);
        }}
      >
        All Items
      </a>
      <a
        id="about_sidebar_link"
        className="menu-item"
        href={
          isProblemUser()
            ? "https://saucelabs.com/error/404"
            : "https://saucelabs.com/"
        }
      >
        About
      </a>
      <a
        id="logout_sidebar_link"
        className="menu-item"
        href="#"
        onClick={(evt) => {
          evt.preventDefault();
          removeCredentials();
          history.push(ROUTES.LOGIN);
        }}
      >
        Logout
      </a>
      <a
        id="reset_sidebar_link"
        className="menu-item"
        href="#"
        onClick={(evt) => {
          evt.preventDefault();
          resetStorage();
        }}
      >
        Reset App State
      </a>
    </Menu>
  );
}

export default withRouter(MenuButton);
