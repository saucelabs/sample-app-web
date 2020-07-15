import LoginButton from "./js/components/login-controls.js"
import MenuButton from "./js/components/header-menu-button.js"
import CartButton from "./js/components/header-cart-button.js"
import InventoryList from "./js/components/inventory-list.js"
import InventoryItem from "./js/components/inventory-item.js"
import CartContents from "./js/components/cart-contents.js"
import CheckoutInfo from "./js/components/checkout-info.js"
import CheckoutSummary from "./js/components/checkout-summary.js"
import * as backtrace from 'backtrace-js'


if (process.env.BACKTRACE_TOKEN) {
  backtrace.initialize({
    endpoint: `https://submit.backtrace.io/saucelabs/${process.env.BACKTRACE_TOKEN}/json`,
    token: process.env.BACKTRACE_TOKEN,
  });
}
