import React from "react";
import { act, render } from "@testing-library/react";
import LazyCatalogCard from "../LazyCatalogCard";

class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
    this.observed = [];
    MockIntersectionObserver.instances.push(this);
  }

  observe(target) {
    this.observed.push(target);
  }

  unobserve(target) {
    this.observed = this.observed.filter((node) => node !== target);
  }

  disconnect() {
    this.observed = [];
  }
}
MockIntersectionObserver.instances = [];

const item = {
  id: 0,
  name: "Sauce Labs Bike Light",
  price: 9.99,
  image_url: "bike-light-1200x1500.jpg",
};

describe("LazyCatalogCard", () => {
  const realIntersectionObserver = global.IntersectionObserver;

  beforeEach(() => {
    MockIntersectionObserver.instances = [];
    global.IntersectionObserver = MockIntersectionObserver;
  });

  afterEach(() => {
    global.IntersectionObserver = realIntersectionObserver;
  });

  it("should render a placeholder before it intersects", () => {
    const { getByTestId } = render(
      <LazyCatalogCard item={item} testId="card-0" />,
    );
    expect(getByTestId("card-0-placeholder")).toBeInTheDocument();
  });

  it("should load and unobserve once it intersects", () => {
    const { getByTestId } = render(
      <LazyCatalogCard item={item} testId="card-0" />,
    );
    const observer = MockIntersectionObserver.instances[0];
    const [target] = observer.observed;

    act(() => {
      observer.callback([{ target, isIntersecting: true }]);
    });

    expect(getByTestId("card-0-name")).toBeInTheDocument();
    expect(observer.observed).not.toContain(target);
  });

  it("should ignore entries that are not intersecting", () => {
    const { queryByTestId } = render(
      <LazyCatalogCard item={item} testId="card-0" />,
    );
    const observer = MockIntersectionObserver.instances[0];
    const [target] = observer.observed;

    act(() => {
      observer.callback([{ target, isIntersecting: false }]);
    });

    expect(queryByTestId("card-0-name")).not.toBeInTheDocument();
  });

  it("should disconnect the observer on unmount", () => {
    const { unmount } = render(<LazyCatalogCard item={item} testId="card-0" />);
    const observer = MockIntersectionObserver.instances[0];
    const disconnectSpy = jest.spyOn(observer, "disconnect");
    unmount();
    expect(disconnectSpy).toHaveBeenCalledTimes(1);
  });
});
