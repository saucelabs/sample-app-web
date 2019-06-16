import React from 'react';
import { shallow } from 'enzyme/build';
import SecondaryAppHeader from '../SecondaryAppHeader';

describe('Secondary App Header', () => {
  it('should render the component correctly', () => {
    const component = shallow(
      <SecondaryAppHeader/>
    ).dive();

    expect(component).toMatchSnapshot();
  });

  it('should render a full option component correctly', () => {
    const component = shallow(
      <SecondaryAppHeader
        title="Full options"
        headerBot
        leftComponent={ <div/> }
        rightComponent={ <div/> }
      />
    ).dive();

    expect(component).toMatchSnapshot();
  });
});
