import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../utils/Colors';

export const BUTTON_TYPES = {
  ACTION: 'Action',
};
const styles = () => ({
    rootAction: {
      backgroundColor: colors.white,
      '&:hover': {
        //you want this to be the same as the backgroundColor above
        backgroundColor: colors.white,
      },
      border: `2px solid ${ colors.slRed }`,
      borderRadius: 0,
    },
    labelAction: {
      color: colors.slRed,
      fontSize: 18,
      textTransform: 'uppercase',
    },
  }
);

const { string, func, object } = PropTypes;
const { isRequired } = string;

class BaseButton extends Component {
  static propTypes = {
    buttonType: isRequired,
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

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, dataTest, fallBackClasses, label, buttonType, onClick, testID } = this.props;

    return (
      <Button
        classes={ {
          // ` ${fallBackClasses}` is there to make it backwards compatible,
          // it doesn't not have an other function
          root: classes[ `root${ buttonType }` ] + ` ${ fallBackClasses }`,
          label: classes[ `label${ buttonType }` ],
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
