import React, { Component } from 'react';
import { IconButton, withStyles } from '@material-ui/core';
import * as PropTypes from 'prop-types';
import menuIconPng from '../../assets/img/menu.png';
import menuIconSvg from '../../assets/svg/menu@3x.svg';
import { colors } from '../../utils/Colors';

const styles = () => ({
    menuIcon: {
      background: `url(${ menuIconPng }) no-repeat center center`,
      backgroundImage: `url(${menuIconSvg})`,
      borderRadius: 0,
      height: 40,
      width: 40,
      '&:hover': {
        backgroundColor: colors.white,
      },
    },
  }
);
const { func, object, string } = PropTypes;

class MenuIcon extends Component {
  static propTypes = {
    classes: object.isRequired,
    fallBackClasses: string,
    testID: string,
    onClick: func.isRequired,
  };

  static defaultProps = {
    fallBackClasses: '',
    testID: 'menu-icon-id',
  };

  render() {
    const { classes, fallBackClasses, onClick, testID } = this.props;

    return (
      <IconButton
        classes={ {
          // ` ${fallBackClasses}` is there to make it backwards compatible,
          // it doesn't not have an other function
          root: classes.menuIcon + ` ${ fallBackClasses }`,
        } }
        id={ testID }
        onClick={ onClick }
      />
    );
  }
}

export default withStyles(styles)(MenuIcon);
