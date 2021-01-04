/**
 * Sort array of objects asc
 *
 * @param {Array} data
 * @param {string} property
 * @returns {Array}
 */
export function sortAsc(data, property) {
  return [...data].sort((a, b) => a[property].localeCompare(b[property]));
}

/**
 * Sort array of objects desc
 *
 * @param {Array} data
 * @param {string} property
 * @returns {Array}
 */
export function sortDesc(data, property) {
  return [...data].sort((a, b) => b[property].localeCompare(a[property]));
}

/**
 * Sort array of objects asc
 *
 * @param {Array} data
 * @param {string} property
 * @returns {Array}
 */
export function sortLoHi(data, property) {
  return [...data].sort((a, b) => Number(a[property]) - Number(b[property]));
}

/**
 * Sort array of objects asc
 *
 * @param {Array} data
 * @param {string} property
 * @returns {Array}
 */
export function sortHiLo(data, property) {
  return [...data].sort((a, b) => Number(b[property]) - Number(a[property]));
}
