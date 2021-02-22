import React, { useState } from "react";
import SubmitButton from "../../components/SubmitButton";

export default {
  title: "SwagLabs/Form/Submit Button",
  component: SubmitButton,
};

const Template = (args) => {
  const [value, setValue] = useState(0);
  return (
    <>
      <SubmitButton {...args} onClick={() => setValue(value + 1)} />
      <p>
        You clicked <strong>{value}</strong> times.
      </p>
    </>
  );
};

export const Submit = Template.bind({});
Submit.args = {
  value: "Submit button",
};
