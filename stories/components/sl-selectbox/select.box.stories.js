import React from 'react';
import { style } from '../../utils/styling';
import Select from '../../../src/components/Select';

export default class SelectBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: 'Name (A to Z)',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    const id = event.nativeEvent.target.selectedIndex;
    this.setState({
      selectedValue: event.nativeEvent.target[id].text,
    });
  }

  render() {
    return (
      <div>
        <Select
          options={
            [
              { value: 'az', label: 'Name (A to Z)' },
              { value: 'za', label: 'Name (Z to A)' },
              { value: 'lohi', label: 'Price (low to high)' },
              { value: 'hilo', label: 'Price (high to low)' },
            ]
          }
          onChange={this.handleOnChange}
        />
        <div style={ style.stateWhiteContainer }>
          <b>The selected event: </b>
          <span id="select-event-text">{ this.state.selectedValue }</span>
        </div>
      </div>
    );
  }
}
