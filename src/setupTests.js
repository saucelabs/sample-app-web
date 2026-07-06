// Polyfill for webpack's require.context used by some components (tests run in Node)
// This must run before any modules that expect require.context are imported.
if (
  typeof require.context === "undefined" ||
  typeof (global && global.require && global.require.context) === "undefined"
) {
  /* eslint-disable global-require, consistent-return */
  const path = require("path");
  const fs = require("fs");

  const makeContext = (base = ".", scanSubdirs = false, regExp = /.*/) => {
    const absoluteBase = path.resolve(__dirname, base);
    const modules = {};

    try {
      const walk = (dir) => {
        fs.readdirSync(dir).forEach((file) => {
          const fullPath = path.join(dir, file);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
            if (scanSubdirs) walk(fullPath);
            return;
          }
          const relPath = `./${path.relative(absoluteBase, fullPath).replace(/\\/g, "/")}`;
          if (!regExp || regExp.test(relPath)) {
            // We'll return a simple module-like object with a `default` property
            // that points to the relative path. Tests only need a truthy src.
            modules[relPath] = { default: relPath };
          }
        });
      };

      if (fs.existsSync(absoluteBase)) {
        walk(absoluteBase);
      }
    } catch (e) {
      // ignore errors, leave modules empty
    }

    const resolver = (key) => modules[key];
    resolver.keys = () => Object.keys(modules);
    return resolver;
  };

  try {
    require.context = makeContext;
  } catch (e) {
    // ignore
  }
  try {
    if (typeof global !== "undefined") {
      if (typeof global.require === "undefined") global.require = require;
      global.require.context = makeContext;
    }
  } catch (e) {
    // ignore
  }
  /* eslint-enable global-require, consistent-return */
}

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// Use only CommonJS `require` here so the polyfill runs before any module imports.
require('./jest.setupTextEncoder.js');

require('@testing-library/jest-dom');

// Configure RTL to use the project's data-test attribute convention
const { configure } = require('@testing-library/react');
configure({ testIdAttribute: 'data-test' });
