import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../utils/Colors'
import { FONT_FAMILY } from '../utils/Constants'

const styles = theme => ({
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
  }
});

class ErrorMessageContainer extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    dataTest: PropTypes.string,
    errorMessage: PropTypes.string.isRequired,
    testID: PropTypes.string,
  }

  static defaultProps = {
    error: false,
    placeholder: 'Placeholder',
    testID: 'test-id',
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { classes, dataTest, errorMessage, testID } = this.props;

    return (
      <div
        className={ classNames(classes.root, errorMessage ? classes.error : null) }
        { ...(dataTest ? { 'data-test': dataTest } : {}) }
        id={ testID }
      >
        <span className={ classes.errorText }>{ errorMessage }</span>
      </div>
    );
  }
}

ErrorMessageContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ErrorMessageContainer);
