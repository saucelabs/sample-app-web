import React from 'react';
import { shallow } from 'enzyme/build';
import InputError, { INPUT_TYPES } from '../InputError';

let props;

describe('InputError', () => {
  beforeEach(() => {
    props = {
      onChange: jest.fn(),
    };
  });

  it('should render correctly with the required options', () => {
    const component = shallow(<InputError { ...props } />).dive();

    expect(component).toMatchSnapshot();
  });

  it('should render with full options', () => {
    const component = shallow(
      <InputError
        { ...props }
        dataTest="data-test-string"
        placeholder="placeholder-string"
        testID="testid-string"
      />
    ).dive();

    expect(component).toMatchSnapshot();
  });

  it('should render an error component', () => {
    const component = shallow(
      <InputError
        { ...props }
        error
      />
    ).dive();

    expect(component).toMatchSnapshot();
  });

  it('should render secure input', () => {
    const component = shallow(
      <InputError
        { ...props }
        type={INPUT_TYPES.PASSWORD}
      />
    ).dive();

    expect(component).toMatchSnapshot();
  });
});
