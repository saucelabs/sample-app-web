import React from 'react';
import { shallow } from 'enzyme/build';
import MainAppHeader from '../MainAppHeader';

describe('Main App Header', () => {
  it('should render the component correctly', () => {
    const component = shallow(<MainAppHeader />).dive();

    expect(component).toMatchSnapshot();
  });
});
