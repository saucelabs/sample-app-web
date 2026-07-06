// Local StoryRouter decorator to replace the unmaintained `storybook-react-router` package
import React from "react";
import { MemoryRouter } from "react-router-dom";

// Usage: decorators: [withRouter]
export const withRouter = (storyFn, context) => {
  // Allow the story to pass an initialEntries array via context.parameters.router
  const initialEntries = context?.parameters?.router?.initialEntries || ["/"];
  return (
    <MemoryRouter initialEntries={initialEntries}>{storyFn()}</MemoryRouter>
  );
};

export default withRouter;
