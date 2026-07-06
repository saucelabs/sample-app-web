import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "../../../src/utils/Constants";

// Use require to allow jest module mocking
jest.mock("../../../src/utils/Credentials", () => ({
  isLoggedIn: jest.fn(),
}));

const { isLoggedIn } = require("../../../src/utils/Credentials");
const PrivateRoute = require("../PrivateRoute").default;

const Inner = () => <div data-test="inner">Protected Content</div>;
const LoginPage = () => <div data-test="login-page">Login</div>;

function renderPrivateRoute(initialPath = "/protected") {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route
          path="/protected"
          element={<PrivateRoute component={Inner} />}
        />
      </Routes>
    </MemoryRouter>,
  );
}

describe("PrivateRoute", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("renders component when logged in", () => {
    isLoggedIn.mockReturnValue(true);
    const { getByTestId } = renderPrivateRoute();
    expect(getByTestId("inner")).toBeInTheDocument();
  });

  test("redirects to login when not logged in", () => {
    isLoggedIn.mockReturnValue(false);
    const { getByTestId } = renderPrivateRoute();
    expect(getByTestId("login-page")).toBeInTheDocument();
  });
});
