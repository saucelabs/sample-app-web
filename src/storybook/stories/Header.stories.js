import React from "react";
import SecondaryHeader from "../../components/header/SecondaryHeader";
import Button, { BUTTON_TYPES } from "../../components/Button";

export default {
  title: "SwagLabs/Headers",
  component: SecondaryHeader,
};

const Template = (args) => (
  <>
    <SecondaryHeader {...args} />
  </>
);

export const SecondaryEmpty = Template.bind({});
SecondaryEmpty.args = {};

export const SecondaryLeftComponent = Template.bind({});
SecondaryLeftComponent.args = {
  leftComponent: (
    <Button
      label="Back to Products"
      onClick={() => {}}
      type={BUTTON_TYPES.BACK}
    />
  ),
};

export const SecondaryTitle = Template.bind({});
SecondaryTitle.args = {
  title: "Title only",
};

export const SecondaryTitleBotRight = Template.bind({});
SecondaryTitleBotRight.args = {
  headerBot: true,
  rightComponent: (
    <Button
      label="Go to something"
      onClick={() => {}}
      type={BUTTON_TYPES.ACTION}
    />
  ),
  title: "Title and Bot",
};
