import React from 'react';
import { shallow } from 'enzyme';
import Inventory from './Inventory'
import * as Credentials from '../utils/Credentials';

describe('Inventory', () => {
  it('should render correctly for a logged in user', () => {
    const isLoggedInSpy = jest.spyOn(Credentials, 'isLoggedIn');
    isLoggedInSpy.mockReturnValue(true);

    const component = shallow(<Inventory />);

    expect(isLoggedInSpy).toHaveBeenCalled();
    expect(component).toMatchSnapshot();

    isLoggedInSpy.mockClear();
  });

  it('should render correctly for a logged out user', () => {
    const isLoggedInSpy = jest.spyOn(Credentials, 'isLoggedIn');
    isLoggedInSpy.mockReturnValue(false);

    const component = shallow(<Inventory />);

    expect(isLoggedInSpy).toHaveBeenCalled();
    expect(component).toMatchSnapshot();

    isLoggedInSpy.mockClear();
  });
});
