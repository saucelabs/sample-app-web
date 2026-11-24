import React, { useState } from "react";
import FavoritesFilterToggle, {
  FAVORITES_FILTER_VIEWS,
} from "../../components/FavoritesFilterToggle";

export default {
  title: "SwagLabs/FavoritesFilterToggle",
  component: FavoritesFilterToggle,
};

const Template = () => {
  const [activeView, setActiveView] = useState(FAVORITES_FILTER_VIEWS.ALL);

  return (
    <FavoritesFilterToggle
      activeView={activeView}
      onChange={setActiveView}
      testId="favorites-filter-toggle"
    />
  );
};

export const DefaultFavoritesFilterToggle = Template.bind({});
