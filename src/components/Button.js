import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../utils/Colors';
import backPng from '../assets/img/arrow.png';
import backSvg from '../assets/svg/arrow3x.svg';

// @TODO: Fix later
// Needed to do this because `PropTypes.oneOf(Object.values(BUTTON_TYPES))` gave an error
// during compilation. It's an dependency issue, but not important enough for now.
const buttonTypesArray = [ 'Action', 'Add', 'Back', 'Next', 'Remove' ];
export const BUTTON_TYPES = {
  ACTION: 'Action',
  ADD: 'Add',
  BACK: 'Back',
  NEXT: 'Next',
  REMOVE: 'Remove',
};
const styles = theme => (
  {
    root: {
      backgroundColor: colors.white,
      '&:hover': {
        //you want this to be the same as the backgroundColor above
        backgroundColor: colors.white,
      },
      borderRadius: 0,
      padding: '6px 28px',
    },
    rootAction: {
      border: `2px solid ${ colors.slRed }`,
      width: '100%',
    },
    rootAdd: {
      border: `2px solid ${ colors.slRed }`,
      minWidth: 220,
      [ theme.breakpoints.down('md') ]: {
        width: '100%',
      },
    },
    rootBack: {
      border: `2px solid ${ colors.gray }`,
      minWidth: 220,
      [ theme.breakpoints.down('md') ]: {
        width: '100%',
      },
    },
    rootNext: {
      border: `2px solid ${ colors.slRed }`,
      backgroundColor: colors.slRed,
      minWidth: 220,
      [ theme.breakpoints.down('md') ]: {
        width: '100%',
      },
      '&:hover': {
        //you want this to be the same as the backgroundColor above
        backgroundColor: colors.slRed,
      },
    },
    rootRemove: {
      border: `2px solid ${ colors.gray }`,
      minWidth: 220,
      [ theme.breakpoints.down('md') ]: {
        width: '100%',
      },
    },
    label: {
      fontSize: 18,
      textTransform: 'uppercase',
    },
    labelAction: {
      color: colors.slRed,
    },
    labelAdd: {
      color: colors.slRed,
    },
    labelBack: {
      color: colors.gray,
    },
    labelNext: {
      color: colors.white,
    },
    labelRemove: {
      color: colors.gray,
    },
    backImage: {
      position: 'absolute',
      left: 10,
    },
  }
);
const { string, func, object, oneOf } = PropTypes;
const { isRequired } = string;

class BaseButton extends Component {
  static propTypes = {
    buttonType: oneOf(buttonTypesArray).isRequired,
    classes: object.isRequired,
    dataTest: string,
    fallBackClasses: string,
    label: isRequired,
    testID: string,
    onClick: func.isRequired,
    width: string,
  };

  static defaultProps = {
    buttonType: BUTTON_TYPES.ACTION,
    fallBackClasses: '',
    testID: 'test-id',
    width: null,
  };

  render() {
    const { classes, dataTest, fallBackClasses, label, buttonType, onClick, testID } = this.props;
    let backButton = null;

    if (buttonType === BUTTON_TYPES.BACK) {
      backButton = <img src={ backPng } srcSet={ backSvg } className={ classes.backImage }/>;
    }

    return (
      <Button
        classes={ {
          // ` ${fallBackClasses}` is there to make it backwards compatible,
          // it doesn't not have an other function
          root: classes.root + ' ' + classes[ `root${ buttonType }` ] + ` ${ fallBackClasses }`,
          label: classes.label + ' ' + classes[ `label${ buttonType }` ],
        } }
        { ...(dataTest ? { 'data-test': dataTest } : {}) }
        disableFocusRipple
        disableRipple
        id={ testID }
        onClick={ onClick }
      >
        { backButton }
        { label }
      </Button>
    );
  }
}

export default withStyles(styles)(BaseButton);
