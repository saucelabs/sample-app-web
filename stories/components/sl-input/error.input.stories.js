import React from 'react';
import InputError from '../../../src/components/InputError';
import { style } from '../../utils/styling';

export default class ErrorInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      componentState: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      componentState: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <InputError
          className="form_input"
          dataTest="error-input"
          error={ true }
          id="error-input"
          onChange={ this.handleInputChange }
          placeholder="Error placeholder"
          value={ this.state.componentState }
        />
        <div style={ style.stateContainer }>
          <b>The updated state: </b>
          <span id="inputValue">{ this.state.componentState || <span style={ style.lightText }>Start typing</span> }</span>
        </div>
      </div>
    );
  }
}
