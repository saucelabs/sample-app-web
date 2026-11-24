import React from "react";
import FavoriteToggle from "../../components/FavoriteToggle";

export default {
  title: "SwagLabs/FavoriteToggle",
  component: FavoriteToggle,
};

const imageWrapperStyle = {
  position: "relative",
  width: 200,
  height: 150,
  background: "linear-gradient(135deg, #f4f4f4, #e6e6e6)",
};

const Template = (args) => (
  <div style={imageWrapperStyle}>
    <FavoriteToggle {...args} />
  </div>
);

export const Unfavorited = Template.bind({});
Unfavorited.args = {
  itemId: 1,
  testId: "favorite-toggle-1",
};

export const Favorited = Template.bind({});
Favorited.args = {
  itemId: 2,
  testId: "favorite-toggle-2",
};
Favorited.decorators = [
  (Story) => {
    window.localStorage.setItem("favorite-items", JSON.stringify([2]));
    return <Story />;
  },
];
