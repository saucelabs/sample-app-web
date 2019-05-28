import { getSessionUsername, isLockedOutUser, isLoggedIn, isPerformanceGlitchUser, isProblemUser, verifyCredentials } from './Credentials';
import { VALID_PASSWORD, VALID_USERNAMES } from './Constants';

const sessionKey = 'session-username';

describe('Credentials', () => {
  beforeEach(() => {
    jest.spyOn(Storage.prototype, 'setItem');
  });

  afterEach(() => {
    sessionStorage.clear();
    sessionStorage.setItem.mockRestore();
  });

  describe('verifyCredentials', () => {
    it('should be able to return false on an empty password', () => {
      expect(verifyCredentials('username', '')).toEqual(false);
    });

    it('should be able to return false for a valid password but not a valid username', () => {
      expect(verifyCredentials('username', VALID_PASSWORD)).toEqual(false);
    });

    for (let username of VALID_USERNAMES) {
      it(`should be able to return true for a valid password and a "${ username }"`, () => {
        expect(verifyCredentials(username, VALID_PASSWORD)).toEqual(true);
        expect(localStorage.setItem).toHaveBeenCalledWith(sessionKey, username);
      });
    }
  });

  describe('getSessionUsername', () => {
    it('should be able to get the session username', () => {
      sessionStorage.setItem(sessionKey, 'foobar');

      expect(getSessionUsername()).toEqual('foobar');
    });
  });

  describe('isProblemUser', () => {
    it('should be able to determine this is not a problem user', () => {
      sessionStorage.setItem(sessionKey, 'foobar');

      expect(isProblemUser()).toEqual(false);
    });

    it('should be able to determine this is a problem user', () => {
      sessionStorage.setItem(sessionKey, 'problem_user');

      expect(isProblemUser()).toEqual(true);
    });
  });

  describe('isPerformanceGlitchUser', () => {
    it('should be able to determine this is not a performance glitch user', () => {
      sessionStorage.setItem(sessionKey, 'foobar');

      expect(isPerformanceGlitchUser()).toEqual(false);
    });

    it('should be able to determine this is a performance glitch user', () => {
      sessionStorage.setItem(sessionKey, 'performance_glitch_user');

      expect(isPerformanceGlitchUser()).toEqual(true);
    });
  });

  describe('isLockedOutUser', () => {
    it('should be able to determine this is not a locked out user', () => {
      sessionStorage.setItem(sessionKey, 'foobar');

      expect(isLockedOutUser()).toEqual(false);
    });

    it('should be able to determine this is a locked out user', () => {
      sessionStorage.setItem(sessionKey, 'locked_out_user');

      expect(isLockedOutUser()).toEqual(true);
    });
  });

  describe('isLoggedIn', () => {
    it('should be able to determine if the user is logged in as valid standard user', () => {
      sessionStorage.setItem(sessionKey, 'standard_user');

      expect(isLoggedIn()).toEqual(true);
    });

    it('should be able to determine if the user is logged in as valid performance glitch user', () => {
      sessionStorage.setItem(sessionKey, 'performance_glitch_user');

      expect(isLoggedIn()).toEqual(true);
    });

    it('should be able to determine if the user is logged in as valid problem user', () => {
      sessionStorage.setItem(sessionKey, 'problem_user');

      expect(isLoggedIn()).toEqual(true);
    });

    it('should be able to determine if the user is logged out as locket out user', () => {
      sessionStorage.setItem(sessionKey, 'locked_out_user');

      expect(isLoggedIn()).toEqual(false);
    });
  });
});
