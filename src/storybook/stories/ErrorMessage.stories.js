import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";

export default {
  title: "SwagLabs/Form/ErrorMessage",
  component: ErrorMessage,
};

const Template = (args) => {
  const [value, setValue] = useState(0);
  return (
    <>
      <ErrorMessage {...args} onClick={() => setValue(value + 1)} />
      <p>
        You clicked <strong>{value}</strong> times.
      </p>
    </>
  );
};

export const Error = Template.bind({});
Error.args = {
  isError: true,
  errorMessage: "This is an error message",
  onClick: () => console.log("clicked"),
};
