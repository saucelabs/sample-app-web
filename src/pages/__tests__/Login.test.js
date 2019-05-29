import React from 'react';
import { shallow } from 'enzyme/build';
import Login from '../Login';
import Router from '../../utils/__mocks__/historyMock';
import * as Credentials from '../../utils/Credentials';

let wrapper;

describe('Login', () => {
  beforeEach(() => {
    wrapper = shallow(
      <Login.WrappedComponent
        history={ Router.history }
      />
    ).dive();
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the username state when data is typed', () => {
    const usernameInput = wrapper.find('WithStyles(InputError)');

    usernameInput.at(0).simulate('change', { target: { value: 'username' } });

    expect(wrapper.state()).toMatchSnapshot();
  });

  it('should update the password state when data is typed', () => {
    const passwordInput = wrapper.find('WithStyles(InputError)');

    passwordInput.at(1).simulate('change', { target: { value: 'password' } });

    expect(wrapper.state()).toMatchSnapshot();
  });

  it('should set the no username state when the login button is being pressed', () => {
    const button = wrapper.find('WithStyles(BaseButton)');

    button.simulate('click', { preventDefault: () => {} });

    expect(wrapper.state()).toMatchSnapshot();
  });

  it('should set the no password state when the login button is being pressed', () => {
    const button = wrapper.find('WithStyles(BaseButton)');
    const usernameInput = wrapper.find('WithStyles(InputError)');

    usernameInput.at(0).simulate('change', { target: { value: 'username' } });
    button.simulate('click', { preventDefault: () => {} });

    expect(wrapper.state()).toMatchSnapshot();
  });

  it('should set the locked out state when the locked out credentials are used', () => {
    const verifyCredentialsSpy = jest.spyOn(Credentials, 'verifyCredentials');
    const isLockedOutUserSpy = jest.spyOn(Credentials, 'isLockedOutUser');
    verifyCredentialsSpy.mockReturnValueOnce(true);
    isLockedOutUserSpy.mockReturnValueOnce(true);

    const button = wrapper.find('WithStyles(BaseButton)');
    const usernameInput = wrapper.find('WithStyles(InputError)');
    const passwordInput = wrapper.find('WithStyles(InputError)');

    usernameInput.at(0).simulate('change', { target: { value: 'username' } });
    passwordInput.at(1).simulate('change', { target: { value: 'password' } });
    button.simulate('click', { preventDefault: () => {} });

    expect(wrapper.state()).toMatchSnapshot();

    verifyCredentialsSpy.mockClear();
    isLockedOutUserSpy.mockClear();
  });

  it('should set the data does not match state when incorrect credentials are used', () => {
    const verifyCredentialsSpy = jest.spyOn(Credentials, 'verifyCredentials');
    verifyCredentialsSpy.mockReturnValueOnce(false);

    const button = wrapper.find('WithStyles(BaseButton)');
    const usernameInput = wrapper.find('WithStyles(InputError)');
    const passwordInput = wrapper.find('WithStyles(InputError)');

    usernameInput.at(0).simulate('change', { target: { value: 'username' } });
    passwordInput.at(1).simulate('change', { target: { value: 'password' } });
    button.simulate('click', { preventDefault: () => {} });

    expect(wrapper.state()).toMatchSnapshot();

    verifyCredentialsSpy.mockClear();
  });

  it('should empty the state and redirect when valid credentials are used', () => {
    const verifyCredentialsSpy = jest.spyOn(Credentials, 'verifyCredentials');
    const isLockedOutUserSpy = jest.spyOn(Credentials, 'isLockedOutUser');
    const pushSpy = jest.spyOn(Router.history, 'push');
    verifyCredentialsSpy.mockReturnValueOnce(true);
    isLockedOutUserSpy.mockReturnValueOnce(false);

    const button = wrapper.find('WithStyles(BaseButton)');
    const usernameInput = wrapper.find('WithStyles(InputError)');
    const passwordInput = wrapper.find('WithStyles(InputError)');

    usernameInput.at(0).simulate('change', { target: { value: 'username' } });
    passwordInput.at(1).simulate('change', { target: { value: 'password' } });
    button.simulate('click', { preventDefault: () => {} });

    expect(wrapper.state()).toMatchSnapshot();
    expect(pushSpy).toHaveBeenCalled();

    verifyCredentialsSpy.mockClear();
    isLockedOutUserSpy.mockClear();
    pushSpy.mockClear();
  });
});
