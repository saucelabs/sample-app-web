const path = require("path");

// @saucelabs/visual-storybook is ESM-only and its package.json "exports" map has no
// "require" condition for the main entry, so `require("@saucelabs/visual-storybook")`
// fails resolution outright. Resolving the built file's absolute path via the one
// subpath it does expose ("./package.json") sidesteps that "exports" lookup entirely.
// Requiring an ESM file synchronously needs Node's require(ESM) support (stable from
// Node 22.12+, and needs 24.9+ for jest's specific vm module APIs).
const packageJsonPath = require.resolve("@saucelabs/visual-storybook/package.json");
const entryPath = path.join(path.dirname(packageJsonPath), "build", "index.js");
const { preVisit, postVisit } = require(entryPath);

module.exports = {
  preVisit,
  postVisit,
};
