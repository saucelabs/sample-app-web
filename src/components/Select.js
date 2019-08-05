import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../utils/Colors';
import filterSvg from '../assets/svg/filter3x.svg';

const styles = theme => (
  {
    root: {
      backgroundColor: colors.white,
      '&:hover': {
        //you want this to be the same as the backgroundColor above
        backgroundColor: colors.white,
      },
      '&::before': {
        content: `url(${ filterSvg })`,
        height: 40,
        width: 40,
        position: 'absolute',
        left: 0,
        top: 0,
      },
      borderRadius: 0,
    },
    select: {
      color: colors.gray,
      padding: 0,
      fontSize: 14,
      height: 40,
      textTransform: 'uppercase',
      width: 220,
      textAlign: 'center',
      textAlignLast: 'center',
      position: 'relative',
      [ theme.breakpoints.down('md') ]: {
        // Dirty little hack to hide the text but still make it clickable
        width: 0,
        paddingLeft: 40,
        minWidth: 0,
      },
    },
    icon: {
      [ theme.breakpoints.down('md') ]: {
        display: 'none',
      },
    },
  }
);
const { string, func, object } = PropTypes;

class SelectBox extends Component {
  static propTypes = {
    classes: object.isRequired,
    dataTest: string,
    onChange: func.isRequired,
    fallBackClasses: string,
    testID: string,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: string.isRequired,
      label: string.isRequired,
    })).isRequired,
  };

  static defaultProps = {
    fallBackClasses: '',
  };

  render() {
    const { classes, dataTest, fallBackClasses, options, onChange, testID } = this.props;

    return (
      <Select
        classes={ {
          // ` ${fallBackClasses}` is there to make it backwards compatible,
          // it doesn't not have an other function
          root: `${ classes.root } ${ fallBackClasses }`,
          select: classes.select,
          icon: classes.icon,
        } }
        { ...(dataTest ? { 'data-test': dataTest } : {}) }
        { ...(testID ? { testID } : {}) }
        native
        onChange={ onChange }
      >
        { options.map(option =>
          <option key={ option.id } value={ option.value }>{ option.label }</option>
        ) }
      </Select>
    );
  }
}

export default withStyles(styles)(SelectBox);
