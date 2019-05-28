import React from 'react';
import { shallow } from 'enzyme';
import ErrorMessageContainer from './ErrorMessageContainer'

let props

describe('ErrorMessageContainer', () => {
  beforeEach(() => {
    props = {
      errorMessage: 'Error Message',
    };
  });

  it('should render correctly with the required options', () => {
    const component = shallow(<ErrorMessageContainer { ...props } />).dive();

    expect(component).toMatchSnapshot();
  });

  it('should render without with having an empty string', () => {
    const component = shallow(
      <ErrorMessageContainer
        errorMessage=""
      />
    ).dive();

    expect(component).toMatchSnapshot();
  });

  it('should render correctly with full options', () => {
    const component = shallow(
      <ErrorMessageContainer
        { ...props }
        dataTest="data-test-string"
        testID="test-id-string"
      />
    ).dive();

    expect(component).toMatchSnapshot();
  });
});
