import React from 'react';
import InputError, { INPUT_TYPES } from '../../../src/components/InputError';
import { style } from '../../utils/styling';

export default class SecureInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      componentState: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      componentState: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <InputError
          className="form_input"
          dataTest="secure-input"
          error={ false }
          id="secure-input"
          onChange={ this.handleInputChange }
          placeholder="Secure Placeholder"
          type={ INPUT_TYPES.PASSWORD }
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
