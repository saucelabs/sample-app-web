import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Credentials } from './credentials.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

class CheckoutInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      postalCode: ''
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePostalCodeChange = this.handlePostalCodeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleFirstNameChange(evt) {
    this.setState({
      firstName: evt.target.value,
    });
  };

  handleLastNameChange(evt) {

    var newState = {
      lastName: evt.target.value,
    };

    if (Credentials.isProblemUser()) {
      // Overwrite the firstname also
      newState.firstName = evt.target.value;
    }

    this.setState(newState);
  };

  handlePostalCodeChange(evt) {
    this.setState({
      postalCode: evt.target.value,
    });
  };

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.firstName) {
      return this.setState({ error: 'First Name is required' });
    }

    if (!this.state.lastName) {
      return this.setState({ error: 'Last Name is required' });
    }

    if (!this.state.postalCode) {
      return this.setState({ error: 'Postal Code is required' });
    }

    // If we're here, we have our required info. Redirect!
    window.location.href = './checkout-step-two.ejs';

    return '';
  }

  render () {

    return (
        <div className="checkout_info_wrapper">
        <form onSubmit={this.handleSubmit}>
        {
                    this.state.error &&
                    <h3 data-test="error">
                    <button class="error-button" onClick={this.dismissError}>
                    <FontAwesomeIcon icon={faTimesCircle} size="2x" />
                    </button>
                    Error: {this.state.error}
                    </h3>
            }
          <div className="checkout_info">
            <input id="first-name" type="text" className="form_input" data-test="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstNameChange} autocorrect="off" autocapitalize="none" />
            <input id="last-name" type="text" className="form_input" data-test="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastNameChange} autocorrect="off" autocapitalize="none" />
            <input id="postal-code" type="text" className="form_input" data-test="postalCode" placeholder="Zip/Postal Code" value={this.state.postalCode} onChange={this.handlePostalCodeChange} autocorrect="off" autocapitalize="none" />
          </div>
          <div className="checkout_buttons">
            <a class="cart_cancel_link btn_secondary" href="./cart.html">CANCEL</a>
            <input class="btn_primary cart_button" type="submit" value="CONTINUE" />

          </div>
        </form>
      </div>
    );
  }
}

export default CheckoutInfo;

const domContainer = document.getElementById('checkout_info_container');
domContainer ? ReactDOM.render(<CheckoutInfo />, domContainer) : false;
