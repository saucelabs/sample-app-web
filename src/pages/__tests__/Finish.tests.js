import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Finish from "../Finish";
import { ShoppingCart } from "../../utils/shopping-cart";

jest.mock("../../utils/shopping-cart");

let props;

function renderFinish() {
  return render(
    <MemoryRouter>
      <Finish.WrappedComponent {...props} />
    </MemoryRouter>,
  );
}

describe("CheckOutStepTwo", () => {
  beforeEach(() => {
    props = { history: { push: jest.fn() } };
    ShoppingCart.getCartContents = jest.fn().mockReturnValue([]);
    ShoppingCart.registerCartListener = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly with default props", () => {
    const { asFragment } = renderFinish();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should redirect when clicking on back home", () => {
    const { getByTestId } = renderFinish();
    fireEvent.click(getByTestId("back-to-products"));
    expect(props.history.push).toBeCalledWith("/inventory.html");
  });
});
