import React from 'react';
import { shallow } from 'enzyme';
import InventoryItem from './InventoryItem'
import * as Credentials from '../utils/Credentials';

describe('InventoryItem', () => {
  it('should render correctly for a logged in user', () => {
    const isLoggedInSpy = jest.spyOn(Credentials, 'isLoggedIn');
    isLoggedInSpy.mockReturnValue(true);

    const component = shallow(<InventoryItem />);

    expect(isLoggedInSpy).toHaveBeenCalled();
    expect(component).toMatchSnapshot();

    isLoggedInSpy.mockClear();
  });

  it('should render correctly for a logged out user', () => {
    const isLoggedInSpy = jest.spyOn(Credentials, 'isLoggedIn');
    isLoggedInSpy.mockReturnValue(false);

    const component = shallow(<InventoryItem />);

    expect(isLoggedInSpy).toHaveBeenCalled();
    expect(component).toMatchSnapshot();

    isLoggedInSpy.mockClear();
  });
});
