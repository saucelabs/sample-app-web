import { VALID_PASSWORD,VALID_USERNAMES } from './Constants';

/**
 * Verify the credentials
 *
 * @param {string} username
 * @param {string} password
 *
 * @return {boolean}
 */
export function verifyCredentials(username, password) {
  if (password !== VALID_PASSWORD) {
    return false;
  }

  if (!VALID_USERNAMES.includes(username)) {
    return false;
  }

  // If we're here, we had a valid username and password.
  // Store the username in our session storage.
  sessionStorage.setItem('session-username', username);

  return true;
}

/**
 * Check if this is a problem user
 *
 * @return {boolean}
 */
export function isProblemUser() {
  return getSessionUsername() === 'problem_user';
}

/**
 * Check if this is a performance user
 *
 * @return {boolean}
 */
export function isPerformanceGlitchUser() {
  return getSessionUsername() === 'performance_glitch_user';
}

/**
 * Check if this a logged out user
 *
 * @return {boolean}
 */
export function isLockedOutUser() {
  return getSessionUsername() === 'locked_out_user';
}

/**
 * Check if the user is logged in with a valid username
 *
 * @return {boolean}
 */
export function isLoggedIn(){
  const sessionUsername = getSessionUsername();
  const isValidUsername = VALID_USERNAMES.includes(sessionUsername);

  return isValidUsername && sessionUsername !== 'locked_out_user';
}

/**
 * Get the session username
 *
 * @return {string}
 */
export function getSessionUsername() {
  return sessionStorage.getItem('session-username');

}
