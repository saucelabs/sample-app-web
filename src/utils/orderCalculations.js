import { InventoryData } from "./InventoryData";

export function calculateOrderTotals(itemIds, { doublePrices = false } = {}) {
  let orderTotal = 0;

  for (const curItem in itemIds) {
    orderTotal = orderTotal + InventoryData[itemIds[curItem]].price;
    if (doublePrices) {
      // double up for the problem user
      orderTotal = orderTotal + InventoryData[itemIds[curItem]].price;
    }
  }

  const orderTax = (orderTotal * 0.08).toFixed(2);
  const orderGrandTotal = (orderTotal + parseFloat(orderTax)).toFixed(2);

  return { orderTotal, orderTax, orderGrandTotal };
}
