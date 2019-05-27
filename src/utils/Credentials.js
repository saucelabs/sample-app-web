export class Credentials {

  static verifyCredentials(username, password) {
	if (password !== Credentials.VALID_PASSWORD) {
	  return false;
	}
	
	if (Credentials.VALID_USERNAMES.indexOf(username) < 0) {
	  return false;
	}

	// If we're here, we had a valid username and password.
	// Store the username in our session storage.
	window.sessionStorage.setItem('session-username', username);

	return true;
  }

  static isLockedOutUser() {
    return window.sessionStorage.getItem('session-username') === "locked_out_user";
  }

  static isProblemUser() {
    return window.sessionStorage.getItem('session-username') === "problem_user";
  }

  static isPerformanceGlitchUser() {
    return window.sessionStorage.getItem('session-username') === "performance_glitch_user";
  }
}

Credentials.VALID_USERNAMES = [
  "standard_user",
  "locked_out_user",
  "problem_user",
  "performance_glitch_user"
];

Credentials.VALID_PASSWORD = "secret_sauce";

