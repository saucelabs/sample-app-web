import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core';
import { colors } from '../utils/Colors';
import headerLogoPng from '../assets/img/header-logo.png';
import headerLogoSvg from '../assets/svg/logo@3x.svg';
import MenuIcon from './Icons/MenuIcon';
import CartIcon from './Icons/CartIcon';

const styles = theme => ({
    grow: {
      flexGrow: 1,
    },
    root: {
      backgroundColor: colors.white,
      boxShadow: 'none',
      height: 80,
      [ theme.breakpoints.down('md') ]: {
        height: 60,
      },
    },
    toolBar: {
      flex: 1,
      justifyContent: 'space-between',
    },
    headerLogo: {
      height: '40px',
      width: '259px',
      [ theme.breakpoints.down('md') ]: {
        minHeight: 20,
        maxWidth: 190,
      },
    },
  }
);
const { object } = PropTypes;

class MainAppHeader extends Component {
  constructor(props) {
    super(props);

    this.handleMenu = this.handleMenu.bind(this);
    this.openCart = this.openCart.bind(this);
  }

  static propTypes = {
    classes: object.isRequired,
  };

  handleMenu() {
    // Open the drawer
  }

  openCart() {
    // Open the drawer
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={ classes.grow }>
        <AppBar className={ classes.root }>
          <Toolbar className={ classes.toolBar }>
            <MenuIcon
              fallBackClasses="bm-burger-button"
              onClick={ this.handleMenu() }
              testID="open-menu-icon"
            />
            <img src={ headerLogoPng } srcSet={ headerLogoSvg } className={ classes.headerLogo }/>
            <CartIcon
              fallBackClasses="shopping_cart_link"
              onClick={ this.openCart() }
              testID="cart-icon"
              cartContent={1}
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(MainAppHeader);
