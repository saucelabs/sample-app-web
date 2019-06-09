import { CART_CONTENTS } from './Constants';

/**
 * Get the current content of the cart that is stored in the session storage
 *
 * @return {Array}
 */
export function getCartContent(){
  let curContents = sessionStorage.getItem(CART_CONTENTS);

  return curContents ? JSON.parse(curContents) : [];
}
