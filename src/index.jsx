import { BacktraceClient, ErrorBoundary } from "@backtrace/react";
import React from "react";
import { createRoot } from "react-dom/client";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import "./index.css";
import Cart from "./pages/Cart";
import CheckOutStepOne from "./pages/CheckOutStepOne";
import CheckOutStepTwo from "./pages/CheckOutStepTwo";
import Finish from "./pages/Finish";
import Inventory from "./pages/Inventory";
import InventoryItem from "./pages/InventoryItem";
import Login from "./pages/Login";
import { ROUTES } from "./utils/Constants";
import { currentUser } from "./utils/Credentials";
import { ShoppingCart } from "./utils/shopping-cart";
import { InventoryData } from "./utils/InventoryData.js";
import { InventoryDataLong } from "./utils/InventoryDataLong.js";

BacktraceClient.initialize({
  name: "Swag Store",
  version: "3.0.0",
  url: "https://submit.backtrace.io/UNIVERSE/TOKEN/json",
  userAttributes: () => ({
    user: currentUser(),
    shoppingCart: ShoppingCart.getCartContents(),
  }),
});

const routing = (
  <ErrorBoundary>
    <Router>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route
          path={ROUTES.INVENTORY}
          element={
            <PrivateRoute
              component={() => <Inventory data={InventoryData} />}
            />
          }
        />
        <Route
          path={ROUTES.INVENTORY_LONG}
          element={
            <PrivateRoute
              component={() => <Inventory data={InventoryDataLong} />}
            />
          }
        />
        <Route
          path={ROUTES.INVENTORY_LIST}
          element={<PrivateRoute component={InventoryItem} />}
        />
        <Route
          path={ROUTES.CART}
          element={<PrivateRoute component={Cart} />}
        />
        <Route
          path={ROUTES.CHECKOUT_STEP_ONE}
          element={<PrivateRoute component={CheckOutStepOne} />}
        />
        <Route
          path={ROUTES.CHECKOUT_STEP_TWO}
          element={<PrivateRoute component={CheckOutStepTwo} />}
        />
        <Route
          path={ROUTES.CHECKOUT_COMPLETE}
          element={<PrivateRoute component={Finish} />}
        />
      </Routes>
    </Router>
  </ErrorBoundary>
);

const root = createRoot(document.getElementById("root"));
root.render(routing);
