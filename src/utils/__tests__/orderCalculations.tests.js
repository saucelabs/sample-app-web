import { calculateOrderTotals } from "../orderCalculations";

describe("calculateOrderTotals", () => {
  it("should return zeroed totals for an empty cart", () => {
    expect(calculateOrderTotals([])).toEqual({
      orderTotal: 0,
      orderTax: "0.00",
      orderGrandTotal: "0.00",
    });
  });

  it("should sum up the prices of the items in the cart", () => {
    // 1: Bolt T-Shirt ($15.99), 4: Backpack ($29.99)
    expect(calculateOrderTotals([1, 4])).toEqual({
      orderTotal: 45.98,
      orderTax: "3.68",
      orderGrandTotal: "49.66",
    });
  });

  it("should double the prices when doublePrices is set", () => {
    expect(calculateOrderTotals([1], { doublePrices: true })).toEqual({
      orderTotal: 31.98,
      orderTax: "2.56",
      orderGrandTotal: "34.54",
    });
  });
});
