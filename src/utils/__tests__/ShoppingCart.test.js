import { CART_CONTENTS } from '../Constants';
import { getCartContent } from '../ShoppingCart';

describe('Shopping cart', () => {
  beforeEach(() => {
    jest.spyOn(Storage.prototype, 'setItem');
    jest.spyOn(Storage.prototype, 'getItem');
  });

  afterEach(() => {
    sessionStorage.clear();
    sessionStorage.setItem.mockRestore();
  });

  describe('getCartContent', () => {
    it('should be able to get the cart content from the session storage when no data has been stored', () => {
      expect(getCartContent()).toEqual([]);
    });

    it('should be able to get the cart content from the session storage when data has been stored', () => {
      const sessionData = [4,5,7];

      sessionStorage.setItem(CART_CONTENTS, JSON.stringify(sessionData));

      expect(getCartContent()).toEqual(sessionData);
    });
  });
});
