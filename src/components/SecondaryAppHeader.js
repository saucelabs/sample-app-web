import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core';
import { colors } from '../utils/Colors';
import headerBotPng from '../assets/img/headerBot2x.png';
import headerBotSvg from '../assets/svg/headerBot3x.svg';
import { FONT_FAMILY } from '../utils/Constants';

const styles = theme => ({
    root: {
      backgroundColor: colors.gray,
      boxShadow: 'none',
      height: 100,
      [ theme.breakpoints.down('md') ]: {
        height: 60,
      },
    },
    toolBar: {
      flex: 1,
      flexDirection: 'row',
      [ theme.breakpoints.down('md') ]: {
        paddingLeft: 10,
        paddingRight: 10,
      },
    },
    title: {
      color: colors.white,
      fontFamily: FONT_FAMILY,
      fontSize: 24,
      marginLeft: 16,
      textTransform: 'uppercase',
      [ theme.breakpoints.down('md') ]: {
        fontSize: 20,
        marginLeft: 0,
      },
    },
    headerBot: {
      marginLeft: 40,
      marginTop: 33,
      [ theme.breakpoints.down('md') ]: {
        display: 'none',
      },
    },
    leftComponent: {
      [ theme.breakpoints.down('md') ]: {
        width: '100%',
      },
    },
    rightComponent: {
      marginLeft: 'auto',
      marginRight: 16,
      [ theme.breakpoints.down('md') ]: {
        marginRight: 0,
      },
    },
  }
);
const { bool, func, string, object } = PropTypes;

class SecondaryAppHeader extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    classes: object.isRequired,
    title: string,
    headerBot: bool,
    leftComponent: func,
    rightComponent: func,
  };

  static defaultProps = {
    title: null,
    headerBot: null,
    leftComponent: null,
    rightComponent: null,
  }

  /**
   * The title component in the header
   *
   * @return {element|null}
   */
  title() {
    const { classes, title } = this.props;

    return !title || (
      <span className={ classes.title }>{ title }</span>
    );
  }

  /**
   * The header bot in the header
   *
   * @return {element|null}
   */
  headerBot() {
    const { classes, headerBot } = this.props;

    return !headerBot || (
      <img className={ classes.headerBot } src={ headerBotPng } srcSet={ headerBotSvg }/>
    );

  }

  /**
   * The left component in the header
   *
   * @return {element|null}
   */
  leftComponent() {
    const { classes, leftComponent } = this.props;

    return !leftComponent || (
      <div className={ classes.leftComponent }>
        { React.cloneElement(leftComponent) }
      </div>
    );
  }

  /**
   * The right component in the header
   *
   * @return {element|null}
   */
  rightComponent() {
    const { classes, rightComponent } = this.props;

    return rightComponent ? (
        <div className={ classes.rightComponent }>
          { React.cloneElement(rightComponent) }
        </div>
      )
      : null;
  }

  render() {
    const { classes } = this.props;

    return (
      <AppBar className={ classes.root }>
        <Toolbar className={ classes.toolBar }>
          { this.title() }
          { this.headerBot() }
          { this.leftComponent() }
          { this.rightComponent() }
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(SecondaryAppHeader);
