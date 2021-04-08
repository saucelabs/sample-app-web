import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { slide as Menu } from "react-burger-menu";
import { ShoppingCart } from "../utils/shopping-cart";
import { ROUTES } from "../utils/Constants";
import { isProblemUser, removeCredentials } from "../utils/Credentials";
import menuClosePng from "../assets/img/close.png";
import menuCloseSvg from "../assets/svg/close@3x.svg";
import menuIconPng from "../assets/img/menu.png";
import menuIconSvg from "../assets/svg/menu3x.svg";
import "./DrawerMenu.css";

const DrawerMenu = ({ history }) => {
  const resetStorage = () => {
    // Wipe out our shopping cart now
    ShoppingCart.resetCart();
  };
  const aboutLink = isProblemUser()
    ? "https://saucelabs.com/error/404"
    : "https://saucelabs.com/";

  return (
    <Menu
      customBurgerIcon={
        <img src={menuIconPng} srcSet={menuIconSvg} alt="Open Menu" />
      }
      customCrossIcon={
        <img src={menuClosePng} srcSet={menuCloseSvg} alt="Close Menu" />
      }
      outerContainerId={"page_wrapper"}
      pageWrapId={"contents_wrapper"}
      noOverlay
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
      <a id="about_sidebar_link" className="menu-item" href={aboutLink}>
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
};
DrawerMenu.propTypes = {
  /**
   * The history
   */
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(DrawerMenu);
