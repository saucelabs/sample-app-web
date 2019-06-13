import React from 'react';
import { style } from '../../utils/styling';
import Button, { BUTTON_TYPES } from '../../../src/components/Button';

export default class AddButton extends React.Component {
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
          buttonType={ BUTTON_TYPES.ADD }
          fallBackClasses="btn_action"
          label="Add Button text"
          onClick={ this.handleOnClick }
        />
        <div style={ style.stateContainer }>
          <b>Amount of times that the event was triggered: </b>
          <span id="click-event-triggered">{ this.state.componentState }</span>
        </div>
      </div>
    );
  }
}
