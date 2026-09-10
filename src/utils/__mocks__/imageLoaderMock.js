// Mock for imageLoader.js — used by Jest via moduleNameMapper.
// imageLoader uses Vite's import.meta.glob which is not available in Jest.
// Components that call getImage() expect undefined in test snapshots anyway.
module.exports = function getImage() {
  return undefined;
};

