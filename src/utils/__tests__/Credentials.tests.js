jest.mock("js-cookie", () => ({
  get: jest.fn(),
  set: jest.fn(),
  remove: jest.fn(),
}));

import Cookies from "js-cookie";
import {
  isLockedOutUser,
  isLoggedIn,
  isPerformanceGlitchUser,
  isProblemUser,
  removeCredentials,
  setCredentials,
  verifyCredentials,
} from "../Credentials";
import {
  SESSION_USERNAME,
  VALID_PASSWORD,
  VALID_USERNAMES,
} from "../Constants";

describe("Credentials", () => {
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
      });
    }
  });

  describe("setCredentials", () => {
    it("should verify that the setCredentials is being called with the correct arguments", () => {
      // Friday 1 January 2021 00:00:00
      const mockDate = new Date(1609459200000);
      const spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate);

      setCredentials("foo", "bar");
      //  Friday 1 January 2021 00:10:00
      expect(Cookies.set).toHaveBeenCalledWith(SESSION_USERNAME, "foo", {
        expires: new Date(1609459800000),
      });

      spy.mockRestore();
    });
  });

  describe("removeCredentials", () => {
    it("should verify that the removeCredentials calls the removal of the local storage", () => {
      removeCredentials();
      expect(Cookies.remove).toHaveBeenCalledWith(SESSION_USERNAME);
    });
  });

  describe("isProblemUser", () => {
    it("should be able to determine this is not a problem user", () => {
      Cookies.get.mockReturnValueOnce("foo");
      expect(isProblemUser()).toEqual(false);
    });

    it("should be able to determine this is a problem user", () => {
      Cookies.get.mockReturnValueOnce("problem_user");
      expect(isProblemUser()).toEqual(true);
    });
  });

  describe("isPerformanceGlitchUser", () => {
    it("should be able to determine this is not a performance glitch user", () => {
      Cookies.get.mockReturnValueOnce("foo");
      expect(isPerformanceGlitchUser()).toEqual(false);
    });

    it("should be able to determine this is a performance glitch user", () => {
      Cookies.get.mockReturnValueOnce("performance_glitch_user");
      expect(isPerformanceGlitchUser()).toEqual(true);
    });
  });

  describe("isLockedOutUser", () => {
    it("should be able to determine this is not a locked out user", () => {
      Cookies.get.mockReturnValueOnce("foo");

      expect(isLockedOutUser()).toEqual(false);
    });

    it("should be able to determine this is a locked out user", () => {
      Cookies.get.mockReturnValueOnce("locked_out_user");
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
        Cookies.get.mockReturnValueOnce(username);

        expect(isLoggedIn()).toEqual(true);
      });
    }

    it("should be able to determine if the user is logged out as locket out user", () => {
      Cookies.get.mockReturnValueOnce("locked_out_user");

      expect(isLoggedIn()).toEqual(false);
    });
  });
});
