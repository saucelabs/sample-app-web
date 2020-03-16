import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Credentials } from './credentials.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
  	  username: '',
	  password: '',
	  error: ''
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    if (Credentials.verifyCredentials(this.state.username, this.state.password)) {
      // Catch our locked-out user and bail out
      if (Credentials.isLockedOutUser()) {
        return this.setState({ error: 'Sorry, this user has been locked out.' });
      }

      // If we're here, we have a username and password. Redirect!
      window.location.href = './inventory.html';
    } else {
      return this.setState({ error: 'Username and password do not match any user in this service' });
    }

    return '';
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {

	  return (
		<div className="login-box">
		  <form onSubmit={this.handleSubmit}>
			  <input type="text" className="form_input" data-test="username" id="user-name" placeholder="Username" value={this.state.username} onChange={this.handleUserChange} autoCorrect="off" autoCapitalize="none" />
			  <input type="password" className="form_input" data-test="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handlePassChange} autoCorrect="off" autoCapitalize="none" />
			  <input type="submit" className="btn_action" value="LOGIN" />
			  {
                  this.state.error &&
                  <h3 data-test="error">
                  <button className="error-button" onClick={this.dismissError}>
                  <FontAwesomeIcon icon={faTimesCircle} size="2x" />
                  </button>
                  Epic sadface: {this.state.error}
                  </h3>
			  }
		  </form>
		</div>
	  );
  }
}

export default LoginButton;

const domContainer = document.getElementById('login_button_container');
domContainer ? ReactDOM.render(<LoginButton />, domContainer) : false;
