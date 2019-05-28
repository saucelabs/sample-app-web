import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import { colors } from '../utils/Colors';

export const INPUT_TYPES = {
  TEXT: 'text',
  PASSWORD: 'password',
};
const styles = () => ({
  root: {
    borderBottom: `2px solid ${ colors.lightGray }`,
  },
  rootError: {
    borderBottom: `2px solid ${ colors.slRed }`,
  },
  inputError: {
    color: colors.slRed,
  },
  icon: {
    color: colors.slRed,
  },
});

const { object, string, bool, func } = PropTypes;

class InputError extends Component {
  static propTypes = {
    classes: object.isRequired,
    dataTest: string,
    error: bool,
    onChange: func.isRequired,
    placeholder: string,
    testID: string,
    type: string,
  }

  static defaultProps = {
    error: false,
    placeholder: 'Placeholder',
    testID: 'test-id',
    type: INPUT_TYPES.TEXT,
  };

  render() {
    const { classes, dataTest, error, testID, onChange, placeholder, type } = this.props;
    const endAdornment = (error ? (
      <InputAdornment>
        <Icon style={ { color: colors.slRed } }>
          cancel
        </Icon>
      </InputAdornment>
    ) : null);

    return (
      <Input
        classes={ {
          root: error ? classes.rootError : classes.root,
          // `' form-input'` is there to make it backwards compatible,
          // it doesn't not have an other function
          input: (error ? classes.inputError : {}) + ' form-input',
        } }
        disableUnderline
        inputProps={ {
          placeholder: placeholder,
          ...(dataTest ? { 'data-test': dataTest } : {}),
        } }
        fullWidth
        id={ testID }
        onChange={ onChange }
        endAdornment={ endAdornment }
        type={ type }
      />
    );
  }
}

export default withStyles(styles)(InputError);
