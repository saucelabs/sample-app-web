import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../utils/Colors';
import backPng from '../assets/img/arrow.png';
import backSvg from '../assets/svg/arrow3x.svg';

export const BUTTON_TYPES = {
  ACTION: 'Action',
  ADD: 'Add',
  BACK: 'Back',
  NEXT: 'Next',
  REMOVE: 'Remove',
};
export const LABEL_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
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
      textTransform: 'uppercase',
    },
    smallLabel: {
      fontSize: 14,
    },
    mediumLabel: {
      fontSize: 18,
    },
    largeLabel: {
      fontSize: 22,
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

class BaseButton extends Component {
  static propTypes = {
    buttonType: oneOf(Object.values(BUTTON_TYPES)).isRequired,
    classes: object.isRequired,
    dataTest: string,
    fallBackClasses: string,
    label: string.isRequired,
    labelSize: oneOf(Object.values(LABEL_SIZE)),
    testID: string,
    onClick: func.isRequired,
    width: string,
  };

  static defaultProps = {
    buttonType: BUTTON_TYPES.ACTION,
    fallBackClasses: '',
    labelSize: LABEL_SIZE.MEDIUM,
    testID: 'test-id',
    width: null,
  };

  /**
   * Get the backbutton
   *
   * @return {element|null}
   */
  backButton() {
    const { classes, buttonType } = this.props;

    return buttonType === BUTTON_TYPES.BACK ? (
        <img src={ backPng } srcSet={ backSvg } className={ classes.backImage }/>
      )
      : null;
  }

  render() {
    const { classes, dataTest, fallBackClasses, label, labelSize, buttonType, onClick, testID } = this.props;

    // ` ${fallBackClasses}` is there to make it backwards compatible,
    // it doesn't not have an other function
    const rootClass = `${classes.root} ${classes[`root${buttonType}`]} ${fallBackClasses}`;
    const labelClass = `${classes.label} ${classes[`label${buttonType}`]} ${classes[`${labelSize}Label`]}`;

    return (
      <Button
        classes={ { root: rootClass, label: labelClass } }
        { ...(dataTest ? { 'data-test': dataTest } : {}) }
        disableFocusRipple
        disableRipple
        id={ testID }
        onClick={ onClick }
      >
        { this.backButton() }
        { label }
      </Button>
    );
  }
}

export default withStyles(styles)(BaseButton);
