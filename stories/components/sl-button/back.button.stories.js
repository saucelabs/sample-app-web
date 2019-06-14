import React from 'react';
import { style } from '../../utils/styling';
import Button, { BUTTON_TYPES } from '../../../src/components/Button';

export default class BackButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      componentState: 0,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({
      componentState: this.state.componentState + 1,
    });
  }

  render() {
    return (
      <div>
        <Button
          buttonType={ BUTTON_TYPES.BACK }
          fallBackClasses="btn_action"
          label="Continue shopping"
          onClick={ this.handleOnClick }
          width="260"
        />
        <div style={ style.stateContainer }>
          <b>Amount of times that the event was triggered: </b>
          <span id="click-event-triggered">{ this.state.componentState }</span>
        </div>
      </div>
    );
  }
}
