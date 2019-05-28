import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import InputError, { INPUT_TYPES } from '../components/InputError';
import Button, { BUTTON_TYPES } from '../components/Button';
import { colors } from '../utils/Colors';
import LoginLogo from '../img/SwagLabs_logo.png';
import LoginBot from '../img/Login_Bot_graphic.png';
import { isLockedOutUser, verifyCredentials } from '../utils/Credentials';
import ErrorMessageContainer from '../components/ErrorMessageContainer';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  loginWrapper: {
    padding: '30px 20px',
    [ theme.breakpoints.down('xs') ]: {
      padding: 0,
    },
  },
  loginWrapperInner: {
    border: `2px solid ${ colors.lightGray }`,
    boxShadow: 'none',
    maxWidth: 794,
    margin: 'auto',
    [ theme.breakpoints.down('xs') ]: {
      border: 'none',
    },
  },
  wrapper: {
    paddingBottom: 30,
    paddingTop: 30,
  },
  greyWrapper: {
    backgroundColor: colors.lightGray,
  },
  contentWrapper: {
    paddingLeft: 30,
    paddingRight: 30,
    color: colors.gray,
    fontSize: 14,
  },
  logo: {
    textAlign: 'center',
    background: `url(${ LoginLogo }) no-repeat center center`,
    height: 60,
    marginTop: 30,
  },
  bot: {
    textAlign: 'center',
    background: `url(${ LoginBot }) no-repeat center center`,
    minHeight: 260,
    minWidth: 300,
    [ theme.breakpoints.down('xs') ]: {
      marginTop: 30,
    },
  },
  divider: {
    marginBottom: 20,
  },
});

class Login extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      usernameError: false,
      passwordError: false,
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({
      error: '',
      passwordError: false,
      usernameError: false,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({
        error: 'Username is required',
        usernameError: true,
        passwordError: false,
      });
    }

    if (!this.state.password) {
      return this.setState({
        error: 'Password is required',
        usernameError: false,
        passwordError: true,
      });
    }

    if (verifyCredentials(this.state.username, this.state.password)) {
      // Catch our locked-out user and bail out
      if (isLockedOutUser()) {
        return this.setState({
          error: 'Sorry, this user has been locked out.',
          usernameError: false,
          passwordError: false,
        });
      }

      // If we're here, we have a username and password. Redirect!
      this.setState({
        error: '',
        usernameError: false,
        passwordError: false,
      });

      this.props.history.push('./inventory.html');
    } else {
      return this.setState({
        error: 'Username and password do not match any user in this service',
        usernameError: false,
        passwordError: false,
      });
    }
  }

  handleUserChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={ classes.root }>
        <div className={ classes.logo }/>
        <div className={ classes.loginWrapper }>
          <div className={ classes.loginWrapperInner }>

            <Grid container className={ classes.wrapper }>

              <Grid item xs={ 12 } sm={ 6 } className={ classes.contentWrapper }>
                <form onSubmit={ this.handleSubmit }>
                  <InputError
                    className="form_input"
                    dataTest="username"
                    error={ this.state.usernameError }
                    id="user-name"
                    onChange={ this.handleUserChange }
                    placeholder="Username"
                    testID="username"
                    value={ this.state.username }
                  />
                  <div className={ classes.divider }/>
                  <InputError
                    className="form_input"
                    dataTest="password"
                    error={ this.state.passwordError }
                    id="password"
                    onChange={ this.handlePassChange }
                    placeholder="Password"
                    testID="password"
                    type={ INPUT_TYPES.PASSWORD }
                    value={ this.state.password }
                  />
                  <ErrorMessageContainer
                    dataTest="error"
                    errorMessage={ this.state.error }
                    testID="errorMessage"
                  />
                  <Button
                    buttonType={ BUTTON_TYPES.ACTION }
                    fallBackClasses="btn_action"
                    label="Login"
                    onClick={ this.handleSubmit }
                    testID="loginButton"
                  />
                </form>
              </Grid>

              <Grid item xs={ 12 } sm={ 6 }>
                <div className={ classes.bot }/>
              </Grid>

            </Grid>

            <Grid container className={ classNames(classes.wrapper, classes.greyWrapper) }>

              <Grid item xs={ 12 } sm={ 6 } className={ classes.contentWrapper }>
                <b>Accepted usernames are:</b>
                <br/>
                standard_user
                <br/>
                locked_out_user
                <br/>
                problem_user
                <br/>
                performance_glitch_user
                <br/>
              </Grid>

              <Grid item xs={ 12 } sm={ 6 } className={ classes.contentWrapper }>
                <b>Password for all users:</b>
                <br/>
                secret_sauce
              </Grid>

            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Login));
