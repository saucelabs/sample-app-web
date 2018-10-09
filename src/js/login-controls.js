import { Credentials } from './credentials.js';

const e = React.createElement;

class LoginButton extends React.Component {
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
			  <input type="text" className="login-input" data-test="username" placeholder="Username" value={this.state.username} onChange={this.handleUserChange} />			  
			  <input type="password" className="login-input" data-test="password" placeholder="Password" value={this.state.password} onChange={this.handlePassChange} />			  
			  <input type="submit" className="login-button" value="LOGIN" />
			  {
					  this.state.error &&
					  <h3 data-test="error" onClick={this.dismissError}>
					  <button onClick={this.dismissError}>✖</button>
					  Epic sadface: {this.state.error}
					  </h3>
			  }
		  </form>
		</div>
	  );
  }
}

const domContainer = document.querySelector('#login_button_container');
ReactDOM.render(e(LoginButton), domContainer);
