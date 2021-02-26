import React from "react";
import { withRouter } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { ShoppingCart } from "../utils/shopping-cart";
import { ROUTES } from "../utils/Constants";
import { isProblemUser, removeCredentials } from "../utils/Credentials";
import menuIconPng from "../assets/img/menu.png";
import menuIconSvg from "../assets/svg/menu3x.svg";
import "./DrawerMenu.css";

function DrawerMenu(props) {
  const { history } = props;
  const resetStorage = () => {
    // Wipe out our shopping cart now
    ShoppingCart.resetCart();
  };

  return (
    <Menu
      // customBurgerIcon={<img src={ menuIconPng } />}
      customBurgerIcon={<img src={menuIconPng} srcSet={menuIconSvg} />}
      outerContainerId={"page_wrapper"}
      pageWrapId={"contents_wrapper"}
    >
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

export default withRouter(DrawerMenu);
