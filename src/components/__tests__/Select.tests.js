import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Select from "../Select";

let props;

describe("Select", () => {
  beforeEach(() => {
    props = {
      activeOption: "az",
      options: [
        { key: "az", value: "Name (A to Z)" },
        { key: "za", value: "Name (Z to A)" },
        { key: "lohi", value: "Price (low to high)" },
        { key: "hilo", value: "Price (high to low)" },
      ],
      onChange: jest.fn(),
    };
  });

  it("should render with default props", () => {
    const { asFragment } = render(<Select {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with a testID", () => {
    const { asFragment } = render(<Select testId="foo" {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should be able to trigger the onChange", () => {
    const { getByRole } = render(<Select {...props} />);
    fireEvent.change(getByRole("combobox"), {
      target: { value: "za", name: "Name (Z to A)" },
    });
    expect(props.onChange).toHaveBeenCalledTimes(1);
  });
});
