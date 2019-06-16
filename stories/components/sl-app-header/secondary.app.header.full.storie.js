import React from 'react';
import SecondaryAppHeader from '../../../src/components/SecondaryAppHeader';
import Select from '../../../src/components/Select';

export default class SlSecondaryFullAppHeader extends React.Component {
  render() {
    return (
      <SecondaryAppHeader
        title="Products"
        headerBot
        rightComponent={
          <Select
            options={
              [
                { value: 'az', label: 'Name (A to Z)' },
                { value: 'za', label: 'Name (Z to A)' },
                { value: 'lohi', label: 'Price (low to high)' },
                { value: 'hilo', label: 'Price (high to low)' },
              ]
            }
            onChange={ () => {} }
          />
        }
      />
    );
  }
}
