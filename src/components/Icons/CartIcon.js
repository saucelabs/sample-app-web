import React, { Component } from 'react';
import { Badge, IconButton, withStyles } from '@material-ui/core';
import * as PropTypes from 'prop-types';
import cartIconPng from '../../assets/img/cart.png';
import cartIconSvg from '../../assets/svg/cart@3x.svg';
import { colors } from '../../utils/Colors';

const styles = () => ({
    root: {
      borderRadius: 0,
      '&:hover': {
        backgroundColor: colors.white,
      },
      padding: 0,
    },
    cartIcon: {
      background: `url(${ cartIconPng }) no-repeat center center`,
      backgroundImage: `url(${cartIconSvg})`,
      height: 40,
      width: 40,
    },
    badge: {
      backgroundColor: colors.slRed,
      top: '25%',
      right: 5,
    },
  }
);
const { func, number, object, string } = PropTypes;

class CartIcon extends Component {
  static propTypes = {
    cartContent: number.isRequired,
    classes: object.isRequired,
    fallBackClasses: string,
    onClick: func.isRequired,
    testID: string,
  };

  static defaultProps = {
    fallBackClasses: '',
    testID: 'cart-icon-id',
  };

  render() {
    const { cartContent, classes, fallBackClasses, onClick, testID } = this.props;

    return (
      <IconButton
        classes={ {
          // ` ${fallBackClasses}` is there to make it backwards compatible,
          // it doesn't not have an other function
          root: classes.root + ` ${ fallBackClasses }`,
        } }
        id={ testID }
        onClick={ onClick }
      >
        <Badge
          badgeContent={ cartContent }
          color="secondary"
          classes={ { badge: classes.badge } }
          id={ testID + '-content' }
        >
          <div className={ classes.cartIcon }/>
        </Badge>
      </IconButton>
    );
  }
}

export default withStyles(styles)(CartIcon);
