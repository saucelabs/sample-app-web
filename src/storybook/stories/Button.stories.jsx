import React, { useState } from "react";

import Button, { BUTTON_SIZES, BUTTON_TYPES } from "../../components/Button";

export default {
  title: "SwagLabs/Button",
  component: Button,
};

const Template = (args) => {
  const [value, setValue] = useState(0);

  return (
    <>
      <Button {...args} onClick={() => setValue(value + 1)} />
      <p>
        You clicked <strong>{value}</strong> times.
      </p>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  size: BUTTON_SIZES.MEDIUM,
  type: BUTTON_TYPES.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  size: BUTTON_SIZES.MEDIUM,
  type: BUTTON_TYPES.SECONDARY,
};

export const Action = Template.bind({});
Action.args = {
  label: "Some Action",
  size: BUTTON_SIZES.MEDIUM,
  type: BUTTON_TYPES.ACTION,
};

export const Back = Template.bind({});
Back.args = {
  label: "Go back",
  size: BUTTON_SIZES.MEDIUM,
  type: BUTTON_TYPES.BACK,
};

export const Small = Template.bind({});
Small.args = {
  label: "Small",
  size: BUTTON_SIZES.SMALL,
};

export const Medium = Template.bind({});
Medium.args = {
  label: "Medium button",
  size: BUTTON_SIZES.MEDIUM,
};

export const Large = Template.bind({});
Large.args = {
  label: "Large button",
  size: BUTTON_SIZES.LARGE,
};
