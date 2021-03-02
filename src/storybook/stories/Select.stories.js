import React, { useState } from "react";
import Select from "../../components/Select";

export default {
  title: "SwagLabs/Form/Select",
  component: Select,
  parameters: {
    // layout: "centered",
    backgrounds: {
      default: "grey",
      values: [
        {
          name: "grey",
          value: "#474c55",
        },
      ],
    },
  },
};

const Template = () => {
  const [activeOption, setActiveOption] = useState("az");
  const options = [
    { key: "az", value: "Name (A to Z)" },
    { key: "za", value: "Name (Z to A)" },
    { key: "lohi", value: "Price (low to high)" },
    { key: "hilo", value: "Price (high to low)" },
  ];
  const sortByOption = (event) => {
    setActiveOption(event.target.value);
  };

  return (
    <>
      <Select
        activeOption={activeOption}
        options={options}
        onChange={sortByOption}
        testId="product_sort_container"
      />
      <p style={{ color: "#ffffff" }}>
        You selected{" "}
        <strong>
          {
            options[options.findIndex((option) => option.key === activeOption)]
              .value
          }
        </strong>
        .
      </p>
    </>
  );
};

export const DefaultSelect = Template.bind({});
