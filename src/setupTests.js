// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
require("./jest.setupTextEncoder.js");

require("@testing-library/jest-dom");

// Configure RTL to use the project's data-test attribute convention
const { configure } = require("@testing-library/react");
configure({ testIdAttribute: "data-test" });
