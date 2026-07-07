import React from "react";
import { expect, userEvent, within } from "storybook/test";
import CheckOutStepOne from "../../pages/CheckOutStepOne";

export default {
  title: "SwagLabs/Pages/Checkout - Your Information",
  component: CheckOutStepOne,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = () => <CheckOutStepOne />;

export const CheckoutStepOne = Template.bind({});

export const ValidationError = Template.bind({});
ValidationError.play = async ({ canvasElement, step }) => {
  const canvas = within(canvasElement);

  await step("Submit the form without filling it in", async () => {
    await userEvent.click(canvas.getByTestId("continue"));
    await expect(
      canvas.getByText(/First Name is required/i),
    ).toBeInTheDocument();
  });

  await step("Dismiss the error", async () => {
    await userEvent.click(canvas.getByTestId("error-button"));
    await expect(canvas.queryByTestId("error")).not.toBeInTheDocument();
  });
};

export const FillAndSubmit = Template.bind({});
FillAndSubmit.play = async ({ canvasElement, step }) => {
  const canvas = within(canvasElement);

  await step("Fill in the personal info", async () => {
    await userEvent.type(canvas.getByTestId("firstName"), "John");
    await userEvent.type(canvas.getByTestId("lastName"), "Doe");
    await userEvent.type(canvas.getByTestId("postalCode"), "12345");
  });

  await step("Submit the form", async () => {
    await userEvent.click(canvas.getByTestId("continue"));
    await expect(canvas.queryByTestId("error")).not.toBeInTheDocument();
  });
};
