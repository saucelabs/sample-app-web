import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../utils/Colors';
import { FONT_FAMILY } from '../utils/Constants';

const styles = () => ({
  root: {
    backgroundColor: colors.white,
    height: 45,
    marginBottom: 2,
    marginTop: 2,
    display: 'flex',
    flex: 1,
  },
  error: {
    backgroundColor: colors.slRed,
  },
  errorText: {
    fontFamily: FONT_FAMILY,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 14,
    color: colors.white,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

const { object, string } = PropTypes;

class ErrorMessageContainer extends Component {
  static propTypes = {
    classes: object.isRequired,
    dataTest: string,
    errorMessage: string.isRequired,
    testID: string,
  };

  static defaultProps = {
    placeholder: 'Placeholder',
    testID: 'test-id',
  };

  render() {
    const { classes, dataTest, errorMessage, testID } = this.props;

    return (
      <div
        className={ classNames(classes.root, errorMessage ? classes.error : null) }
        { ...(errorMessage && dataTest ? { 'data-test': dataTest } : {}) }
        { ...(errorMessage ? { id: testID } : {}) }
      >
        <span className={ classes.errorText }>{ errorMessage }</span>
      </div>
    );
  }
}

export default withStyles(styles)(ErrorMessageContainer);
