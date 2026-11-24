import React from "react";
import FavoriteCartItem from "../../components/FavoriteCartItem";

export default {
  title: "SwagLabs/FavoriteCartItem",
  component: FavoriteCartItem,
};

const Template = (args) => <FavoriteCartItem {...args} />;

export const DefaultFavoriteCartItem = Template.bind({});
DefaultFavoriteCartItem.args = {
  item: {
    id: 1,
    name: "Sauce Labs Bolt T-Shirt",
    desc: "Get your testing superhero on with the Sauce Labs bolt T-shirt.",
    price: 15.99,
    image_url: "bolt-shirt-1200x1500.jpg",
  },
  onMoveToCart: () => {},
};
