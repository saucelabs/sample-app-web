import React from 'react';
import ErrorMessageContainer from '../../../src/components/ErrorMessageContainer'

export default class SmallErrorMessage extends React.Component {
  render() {
    return (
      <div>
        <ErrorMessageContainer
          dataTest="small-error-message"
          errorMessage="Lorem ipsum dolor sit amet."
          testID="small-error-message"
        />
      </div>
    );
  }
}
