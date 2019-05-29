import React from 'react';
import InputError from '../../../src/components/InputError';
import { style } from '../../utils/styling';

export default class DefaultInput extends React.Component {
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
          dataTest="default-input"
          error={ false }
          id="default-input"
          onChange={ this.handleInputChange }
          placeholder="Placeholder"
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
