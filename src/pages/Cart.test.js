import React from 'react';
import { shallow } from 'enzyme';
import Cart from './Cart';
import * as Credentials from '../utils/Credentials';

describe('Cart', () => {
  it('should render correctly for a logged in user', () => {
    const isLoggedInSpy = jest.spyOn(Credentials, 'isLoggedIn');
    isLoggedInSpy.mockReturnValue(true);

    const component = shallow(<Cart />);

    expect(isLoggedInSpy).toHaveBeenCalled();
    expect(component).toMatchSnapshot();

    isLoggedInSpy.mockClear();
  });

  it('should render correctly for a logged out user', () => {
    const isLoggedInSpy = jest.spyOn(Credentials, 'isLoggedIn');
    isLoggedInSpy.mockReturnValue(false);

    const component = shallow(<Cart />);

    expect(isLoggedInSpy).toHaveBeenCalled();
    expect(component).toMatchSnapshot();

    isLoggedInSpy.mockClear();
  });
});
