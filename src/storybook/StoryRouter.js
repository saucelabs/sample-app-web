// Local StoryRouter decorator to replace the unmaintained `storybook-react-router` package
import React from "react";
import { MemoryRouter } from "react-router-dom";

// Inner decorator — can be used directly as decorators: [withRouter]
export const withRouter = (Story, context) => {
  const initialEntries = context?.parameters?.router?.initialEntries || ["/"];
  return (
    <MemoryRouter initialEntries={initialEntries}>
      <Story />
    </MemoryRouter>
  );
};

// Factory pattern matching the old storybook-react-router API:
// decorators: [StoryRouter()]  →  StoryRouter() returns the withRouter decorator
export default function StoryRouter() {
  return withRouter;
}
