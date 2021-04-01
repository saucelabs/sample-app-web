import { sortAsc, sortDesc, sortHiLo, sortLoHi } from "../Sorting";

const data = [
  { id: 0, name: "Bar" },
  { id: 2.1, name: "Ar" },
  { id: 99.9, name: "Rab" },
];

it("should be able to sort an array with objects asc based on a property", () => {
  expect(sortAsc(data, "name")).toMatchSnapshot();
});

it("should be able to sort an array with objects desc based on a property", () => {
  expect(sortDesc(data, "name")).toMatchSnapshot();
});

it("should be able to sort an array with objects lo to high based on a property", () => {
  expect(sortLoHi(data, "id")).toMatchSnapshot();
});

it("should be able to sort an array with objects hi to low based on a property", () => {
  expect(sortHiLo(data, "id")).toMatchSnapshot();
});
