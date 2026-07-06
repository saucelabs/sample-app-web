import React, { useState } from "react";
import InputError, { INPUT_TYPES } from "../../components/InputError";

export default {
  title: "SwagLabs/Form/Input",
  component: InputError,
  argTypes: {
    // controlled value prop
    value: {
      control: {
        disable: true,
      },
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value ?? "");

  return (
    <>
      <InputError
        onChange={(evt) => setValue(evt.target.value)}
        value={value}
        {...args}
      />
      <p>
        Your typed <strong>"{value}"</strong>.
      </p>
    </>
  );
};

export const Input = Template.bind({});
Input.args = {
  isError: false,
  placeholder: "Placeholder",
};

export const ErrorInput = Template.bind({});
ErrorInput.args = {
  isError: true,
  placeholder: "Placeholder",
  value: "This is the value",
};

export const Secure = Template.bind({});
Secure.args = {
  isError: false,
  type: INPUT_TYPES.PASSWORD,
  placeholder: "Type you password here",
  value: "SecurePassword123!",
};
