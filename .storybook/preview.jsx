import React from "react";
import { MemoryRouter } from "react-router-dom";
import { configure } from "storybook/test";
import "../src/index.css";

// Match the project's data-test attribute convention (see src/setupTests.js)
// so getByTestId/within(...).getByTestId work the same in play functions.
configure({ testIdAttribute: "data-test" });

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default preview;
