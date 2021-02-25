import React from "react";
import StoryRouter from "storybook-react-router";
import InventoryListItem from "../../components/InventoryListItem";

export default {
  title: "SwagLabs/Swag Overview Item",
  component: InventoryListItem,
  decorators: [StoryRouter()],
};

const Template = (args) => (
  <>
    <InventoryListItem {...args} />
    <p>Resize the preview to see the mobile view.</p>
  </>
);

export const SwagOverviewItem = Template.bind({});
SwagOverviewItem.args = {
  history: {
    push: () => {},
  },
  id: 1,
  name: "Sauce Labs Bolt T-Shirt",
  desc: `Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.`,
  price: 15.99,
  image_url: "bolt-shirt-1200x1500.jpg",
};
