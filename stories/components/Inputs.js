import React from 'react';
import Divider from '@material-ui/core/Divider';
import InputError from '../../src/components/InputError';

export default class Inputs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };

    this.handleUserChange = this.handleUserChange.bind(this)
  }

  handleUserChange(event) {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <InputError
          className="form_input"
          dataTest="username"
          error={ false }
          id="user-name"
          onChange={ this.handleUserChange }
          placeholder="Username"
          value={ this.state.username }
        />
        <div>
          <b>The updated state: </b>
          { this.state.username }
        </div>
        <Divider />
      </div>
    );
  }
}
