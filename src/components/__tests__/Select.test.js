import React from 'react';
import { shallow } from 'enzyme/build';
import Select from '../Select';

let props;

describe('Select', () => {
  beforeEach(() => {
    props = {
      options: [
        { value: 'az', label: 'Name (A to Z)' },
        { value: 'za', label: 'Name (Z to A)' },
        { value: 'lohi', label: 'Price (low to high)' },
        { value: 'hilo', label: 'Price (high to low)' },
      ],
      onChange: jest.fn(),
    };
  });

    it('should render correctly with the required options', () => {
      const component = shallow(
        <Select
          { ...props }
        />
      ).dive();

      expect(component).toMatchSnapshot();
    });

    it('should render correctly with full options', () => {
      const component = shallow(
        <Select
          { ...props }
          dataTest="data-test-string"
          fallBackClasses="fallback-classes"
          testID="select"
        />
      ).dive();

      expect(component).toMatchSnapshot();
    });
});
