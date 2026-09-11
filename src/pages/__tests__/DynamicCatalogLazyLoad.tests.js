import React from "react";
import { act, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DynamicCatalogLazyLoad, {
  INITIAL_VISIBLE_COUNT,
  LOAD_MORE_BATCH_SIZE,
} from "../DynamicCatalogLazyLoad";

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

function renderPage() {
  return render(
    <MemoryRouter>
      <DynamicCatalogLazyLoad />
    </MemoryRouter>,
  );
}

function findSentinelObserver() {
  return MockIntersectionObserver.instances.find(
    (instance) =>
      instance.observed[0]?.dataset.test ===
      "dynamic-catalog-lazy-load-sentinel",
  );
}

function triggerSentinelIntersection() {
  const observer = findSentinelObserver();
  const [sentinel] = observer.observed;
  act(() => {
    observer.callback([{ target: sentinel, isIntersecting: true }]);
  });
}

describe("DynamicCatalogLazyLoad", () => {
  const realIntersectionObserver = global.IntersectionObserver;

  beforeEach(() => {
    MockIntersectionObserver.instances = [];
    global.IntersectionObserver = MockIntersectionObserver;
  });

  afterEach(() => {
    global.IntersectionObserver = realIntersectionObserver;
  });

  it("should render correctly", () => {
    const { asFragment } = renderPage();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render only the initial batch of items", () => {
    const { getByTestId, queryByTestId } = renderPage();
    for (let i = 0; i < INITIAL_VISIBLE_COUNT; i++) {
      expect(
        getByTestId(`lazy-load-item-${i}-placeholder`),
      ).toBeInTheDocument();
    }
    expect(
      queryByTestId(`lazy-load-item-${INITIAL_VISIBLE_COUNT}-placeholder`),
    ).not.toBeInTheDocument();
  });

  it("should load another batch once the sentinel scrolls into view", () => {
    const { getByTestId } = renderPage();

    triggerSentinelIntersection();

    const lastNewIndex = INITIAL_VISIBLE_COUNT + LOAD_MORE_BATCH_SIZE - 1;
    expect(
      getByTestId(`lazy-load-item-${lastNewIndex}-placeholder`),
    ).toBeInTheDocument();
  });

  it("should re-arm detection with a fresh observer after each batch, so a still-visible sentinel keeps loading", () => {
    const { getByTestId } = renderPage();
    const firstObserver = findSentinelObserver();

    triggerSentinelIntersection();

    const secondObserver = findSentinelObserver();
    expect(secondObserver).not.toBe(firstObserver);
    expect(firstObserver.observed).toHaveLength(0);

    const lastNewIndex = INITIAL_VISIBLE_COUNT + LOAD_MORE_BATCH_SIZE - 1;
    expect(
      getByTestId(`lazy-load-item-${lastNewIndex}-placeholder`),
    ).toBeInTheDocument();
  });

  it("should keep loading more batches across repeated scrolls, cycling the catalog data", () => {
    const { getByTestId } = renderPage();

    triggerSentinelIntersection();
    triggerSentinelIntersection();
    triggerSentinelIntersection();

    const lastIndex = INITIAL_VISIBLE_COUNT + LOAD_MORE_BATCH_SIZE * 3 - 1;
    expect(
      getByTestId(`lazy-load-item-${lastIndex}-placeholder`),
    ).toBeInTheDocument();
  });

  it("should ignore sentinel entries that are not intersecting", () => {
    const { queryByTestId } = renderPage();
    const observer = findSentinelObserver();
    const [sentinel] = observer.observed;

    act(() => {
      observer.callback([{ target: sentinel, isIntersecting: false }]);
    });

    expect(
      queryByTestId(`lazy-load-item-${INITIAL_VISIBLE_COUNT}-placeholder`),
    ).not.toBeInTheDocument();
  });

  it("should disconnect the sentinel observer on unmount", () => {
    const { unmount } = renderPage();
    const observer = findSentinelObserver();
    const disconnectSpy = jest.spyOn(observer, "disconnect");
    unmount();
    expect(disconnectSpy).toHaveBeenCalledTimes(1);
  });
});
