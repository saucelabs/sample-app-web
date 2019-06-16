import React from 'react';
import SecondaryAppHeader from '../../../src/components/SecondaryAppHeader';
import Button, { BUTTON_TYPES, LABEL_SIZE } from '../../../src/components/Button';

export default class SlLeftComponentAppHeader extends React.Component {
  render() {
    return (
      <SecondaryAppHeader
        leftComponent={
          <Button
            buttonType={ BUTTON_TYPES.BACK }
            label="Back to products"
            onClick={ () => {} }
            labelSize={ LABEL_SIZE.SMALL }
          />
        }
      />
    );
  }
}
