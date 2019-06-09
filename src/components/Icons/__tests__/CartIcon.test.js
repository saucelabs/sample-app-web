import React from 'react';
import { shallow } from 'enzyme/build';
import CartIcon from '../CartIcon';

let props;

describe('CartIcon', () => {
  beforeEach(() => {
    props = {
      cartContent: 0,
      onClick: jest.fn(),
    };
  });

  it('should render correctly with the required options', () => {
    const component = shallow(<CartIcon { ...props } />).dive();

    expect(component).toMatchSnapshot();
  });

  it('should render correctly with full options', () => {
    const component = shallow(
      <CartIcon
        { ...props }
        cartContent={2}
        fallBackClasses="fallback-classes"
        testID="foo-test-bar-id"
      />
    ).dive();

    expect(component).toMatchSnapshot();
  });
});
