import React from 'react';
import { style } from '../../utils/styling';
import CartIcon from '../../../src/components/Icons/CartIcon';

export default class SlCartIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartContent: 0,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({
      cartContent: this.state.cartContent + 1,
    });
  }

  render() {
    return (
      <div>
        <CartIcon
          cartContent={this.state.cartContent}
          fallBackClasses="cart-fallback-class"
          onClick={ this.handleOnClick }
        />
        <div style={ style.stateContainer }>
          <b>Click on the icon to update the badge</b>
        </div>
      </div>
    );
  }
}
