import React from "react";
import StoryRouter from "storybook-react-router";
import CartItem from "../../components/CartItem";

export default {
  title: "SwagLabs/Swag Cart Item",
  component: CartItem,
  decorators: [StoryRouter()],
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => (
  <>
    <CartItem {...args} />
    <p>Resize the preview to see the mobile view.</p>
  </>
);

export const SwagCartItem = Template.bind({});
SwagCartItem.args = {
  history: {
    push: () => {},
  },
  item: {
    id: 1,
    name: "Sauce Labs Bolt T-Shirt",
    desc: `Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.`,
    price: 15.99,
  },
  showButton: true,
};

export const SwagCartItemNoButton = Template.bind({});
SwagCartItemNoButton.args = {
  history: {
    push: () => {},
  },
  item: {
    id: 1,
    name: "Sauce Labs Bolt T-Shirt",
    desc: `Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.`,
    price: 15.99,
  },
  showButton: false,
};
