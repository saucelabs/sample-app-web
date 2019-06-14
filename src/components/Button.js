import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../utils/Colors';

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
    },
    rootAction: {
      border: `2px solid ${ colors.slRed }`,
    },
    rootAdd: {
      border: `2px solid ${ colors.slRed }`,
      width: 220,
      [ theme.breakpoints.down('md') ]: {
        width: '100%',
      },
    },
    rootNext: {
      backgroundColor: colors.slRed,
      width: 220,
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
      width: 220,
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
    labelNext: {
      color: colors.white,
    },
    labelRemove: {
      color: colors.gray,
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
  };

  static defaultProps = {
    buttonType: BUTTON_TYPES.ACTION,
    fallBackClasses: '',
    testID: 'test-id',
  };

  render() {
    const { classes, dataTest, fallBackClasses, label, buttonType, onClick, testID } = this.props;

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
        fullWidth
        id={ testID }
        onClick={ onClick }
      >
        { label }
      </Button>
    );
  }
}

export default withStyles(styles)(BaseButton);
