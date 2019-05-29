import React from 'react';
import ErrorMessageContainer from '../../../src/components/ErrorMessageContainer';

export default class LargeErrorMessage extends React.Component {
  render() {
    return (
      <div>
        <ErrorMessageContainer
          dataTest="large-error-message"
          errorMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat scelerisque feugiat. Sed nibh augue, ultricies quis pellentesque eu, consequat et lectus. Aenean vitae urna sit amet neque facilisis aliquam sed nec elit."
          testID="large-error-message"
        />
      </div>
    );
  }
}
