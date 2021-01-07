import {
  getSessionUsername,
  isLockedOutUser,
  isLoggedIn,
  isPerformanceGlitchUser,
  isProblemUser,
  removeCredentials,
  verifyCredentials,
} from "../Credentials";
import { VALID_PASSWORD, VALID_USERNAMES } from "../Constants";

const sessionKey = "session-username";

describe("Credentials", () => {
  beforeEach(() => {
    jest.spyOn(Storage.prototype, "setItem");
    jest.spyOn(Storage.prototype, "removeItem");
  });

  afterEach(() => {
    localStorage.clear();
    localStorage.setItem.mockRestore();
  });

  describe("verifyCredentials", () => {
    it("should be able to return false on an empty password", () => {
      expect(verifyCredentials("username", "")).toEqual(false);
    });

    it("should be able to return false for a valid password but not a valid username", () => {
      expect(verifyCredentials("username", VALID_PASSWORD)).toEqual(false);
    });

    for (let username of VALID_USERNAMES) {
      it(`should be able to return true for a valid password and a "${username}"`, () => {
        expect(verifyCredentials(username, VALID_PASSWORD)).toEqual(true);
        expect(localStorage.setItem).toHaveBeenCalledWith(sessionKey, username);
      });
    }
  });

  describe("removeCredentials", () => {
    it("should verify that the removeCredentials calls the removal of the local storage", () => {
      removeCredentials();
      expect(localStorage.removeItem).toHaveBeenCalledWith(sessionKey);
    });
  });

  describe("getSessionUsername", () => {
    it("should be able to get the session username", () => {
      localStorage.setItem(sessionKey, "foobar");

      expect(getSessionUsername()).toEqual("foobar");
    });
  });

  describe("isProblemUser", () => {
    it("should be able to determine this is not a problem user", () => {
      localStorage.setItem(sessionKey, "foobar");

      expect(isProblemUser()).toEqual(false);
    });

    it("should be able to determine this is a problem user", () => {
      localStorage.setItem(sessionKey, "problem_user");

      expect(isProblemUser()).toEqual(true);
    });
  });

  describe("isPerformanceGlitchUser", () => {
    it("should be able to determine this is not a performance glitch user", () => {
      localStorage.setItem(sessionKey, "foobar");

      expect(isPerformanceGlitchUser()).toEqual(false);
    });

    it("should be able to determine this is a performance glitch user", () => {
      localStorage.setItem(sessionKey, "performance_glitch_user");

      expect(isPerformanceGlitchUser()).toEqual(true);
    });
  });

  describe("isLockedOutUser", () => {
    it("should be able to determine this is not a locked out user", () => {
      localStorage.setItem(sessionKey, "foobar");

      expect(isLockedOutUser()).toEqual(false);
    });

    it("should be able to determine this is a locked out user", () => {
      localStorage.setItem(sessionKey, "locked_out_user");

      expect(isLockedOutUser()).toEqual(true);
    });
  });

  describe("isLoggedIn", () => {
    for (let username of [
      "standard_user",
      "performance_glitch_user",
      "problem_user",
    ]) {
      it(`should be able to determine if the user is logged in as valid "${username}" user`, () => {
        localStorage.setItem(sessionKey, username);

        expect(isLoggedIn()).toEqual(true);
      });
    }

    it("should be able to determine if the user is logged out as locket out user", () => {
      localStorage.setItem(sessionKey, "locked_out_user");

      expect(isLoggedIn()).toEqual(false);
    });
  });
});
