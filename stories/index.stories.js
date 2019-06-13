import React from 'react';
import { style } from './utils/styling';
import { storiesOf } from '@storybook/react';
import { colors } from '../src/utils/Colors';
import DefaultInput from './components/sl-input/default.input.stories';
import ErrorInput from './components/sl-input/error.input.stories';
import SecureInput from './components/sl-input/secure.input.stories';
import SecureErrorInput from './components/sl-input/secure.error.input.stories';
import LargeErrorMessage from './components/sl-error-message/error.message.large.stories';
import SmallErrorMessage from './components/sl-error-message/error.message.small.stories';
import SlActionButton from './components/sl-button/action.button.stories';
import SlAddButton from './components/sl-button/add.button.stories';
import MainAppHeader from '../src/components/MainAppHeader';
import SlMenuIcon from './components/sl-icons/meniu.icon.storie';
import SlCartIcon from './components/sl-icons/cart.icon.storie';

storiesOf('Components/Inputs', module)
  .addDecorator(storyFn => <div style={ style.componentWrapper }>{ storyFn() }</div>)
  .add('Input', () => <DefaultInput/>)
  .add('Error Input', () => <ErrorInput/>)
  .add('Secure Input', () => <SecureInput/>)
  .add('Secure Error Input', () => <SecureErrorInput/>);

storiesOf('Components/Error Message', module)
  .addDecorator(storyFn => <div style={ style.componentWrapper }>{ storyFn() }</div>)
  .add('Small message text', () => <SmallErrorMessage/>)
  .add('Large message text', () => <LargeErrorMessage/>);

storiesOf('Components/Buttons', module)
  .addDecorator(storyFn => <div style={ style.componentWrapper }>{ storyFn() }</div>)
  .add('Action Button', () => <SlActionButton/>)
  .add('Add Button', () => <SlAddButton/>);

storiesOf('Components/AppBar', module)
  .addParameters({
    backgrounds: [
      { name: 'Secondary App Header', value: colors.gray, default: true },
      { name: 'Sauce Labs Red', value: colors.slRed },
    ],
  })
  .add('MainAppHeader', () => <MainAppHeader/>);

storiesOf('Components/Icons', module)
  .addDecorator(storyFn => <div style={ style.componentWrapper }>{ storyFn() }</div>)
  .add('CartIcon', () => <SlCartIcon/>)
  .add('MenuIcon', () => <SlMenuIcon/>);
