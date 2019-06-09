import React from 'react';
import { shallow } from 'enzyme/build';
import MenuIcon from '../MenuIcon';

let props;

describe('MenuIcon', () => {
  beforeEach(() => {
    props = {
      onClick: jest.fn(),
    };
  });

  it('should render correctly with the required options', () => {
    const component = shallow(<MenuIcon { ...props } />).dive();

    expect(component).toMatchSnapshot();
  });

  it('should render correctly with full options', () => {
    const component = shallow(
      <MenuIcon
        { ...props }
        fallBackClasses="fallback-classes"
        testID="foo-test-bar-id"
      />
    ).dive();

    expect(component).toMatchSnapshot();
  });
});
