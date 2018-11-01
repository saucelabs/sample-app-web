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
    window.location.href = './checkout-step-two.html';      
    
    return '';
  }

  render () {

    return (
        <div className="checkout_info">
        <form onSubmit={this.handleSubmit}>
            <input type="text" className="checkout-input" data-test="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstNameChange} />              
            <input type="text" className="checkout-input" data-test="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastNameChange} />              
            <input type="text" className="checkout-input" data-test="postalCode" placeholder="Zip/Postal Code" value={this.state.postalCode} onChange={this.handlePostalCodeChange} />              
            <a class="cart_cancel_link" href="./cart.html">CANCEL</a>
            <input class="cart_checkout_link" type="submit" value="CONTINUE" />
            {
                    this.state.error &&
                    <h3 data-test="error">
                    <button class="error-button" onClick={this.dismissError}>
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

export default CheckoutInfo;

const domContainer = document.getElementById('checkout_info_container');
domContainer ? ReactDOM.render(<CheckoutInfo />, domContainer) : false;