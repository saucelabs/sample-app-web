import React from 'react';
import { shallow } from 'enzyme/build';
import Button, { BUTTON_TYPES } from '../Button';

let props;

describe('Button', () => {
  beforeEach(() => {
    props = {
      label: 'Test Label',
      onClick: jest.fn(),
    };
  });

  describe('Action Button', () => {
    it('should render correctly with the required options', () => {
      const component = shallow(
        <Button
          { ...props }
          buttonType={ BUTTON_TYPES.ACTION }
        />
      ).dive();

      expect(component).toMatchSnapshot();
    });

    it('should render correctly with full options', () => {
      const component = shallow(
        <Button
          { ...props }
          buttonType={ BUTTON_TYPES.ACTION }
          dataTest="data-test-string"
          fallBackClasses="fallback-classes"
        />
      ).dive();

      expect(component).toMatchSnapshot();
    });
  });

  describe('Add Button', () => {
    it('should render correctly with the required options', () => {
      const component = shallow(
        <Button
          { ...props }
          buttonType={ BUTTON_TYPES.ADD }
        />
      ).dive();

      expect(component).toMatchSnapshot();
    });
  });

  describe('Next Button', () => {
    it('should render correctly with the required options', () => {
      const component = shallow(
        <Button
          { ...props }
          buttonType={ BUTTON_TYPES.NEXT }
        />
      ).dive();

      expect(component).toMatchSnapshot();
    });
  });

  describe('Remove Button', () => {
    it('should render correctly with the required options', () => {
      const component = shallow(
        <Button
          { ...props }
          buttonType={ BUTTON_TYPES.REMOVE }
        />
      ).dive();

      expect(component).toMatchSnapshot();
    });
  });
});
