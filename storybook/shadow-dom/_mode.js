// Reads ?modeOpen=true|false from the URL (default: 'open') and, when a
// #mode-indicator element is present, writes the resolved value into its
// text and data-mode attribute. Returns the resolved mode.
window.resolveShadowMode = function () {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get('modeOpen') === 'false' ? 'closed' : 'open';
  const indicator = document.getElementById('mode-indicator');
  if (indicator) {
    indicator.textContent = mode;
    indicator.dataset.mode = mode;
  }
  return mode;
};
