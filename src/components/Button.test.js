import React from 'react';
import { shallow } from 'enzyme';
import Button, { BUTTON_TYPES } from './Button';

let props

describe('Button', () => {
  beforeEach(() => {
    props = {
      buttonType: BUTTON_TYPES.ACTION,
      label: 'Test Label',
      onClick: jest.fn(),
    };
  });

  it('should render correctly with the required options', () => {
    const component = shallow(<Button { ...props } />).dive();

    expect(component).toMatchSnapshot();
  });

  it('should render correctly with full options', () => {
    const component = shallow(
      <Button
        { ...props }
        dataTest="data-test-string"
        fallBackClasses="fallback-classes"
      />
    ).dive();

    expect(component).toMatchSnapshot();
  });
});
