import React from 'react';
import {style} from './utils/styling';

import { storiesOf } from '@storybook/react';
import DefaultInput from './components/sl-input/default.input.stories';
import ErrorInput from './components/sl-input/error.input.stories';
import SecureInput from './components/sl-input/secure.input.stories';
import SecureErrorInput from './components/sl-input/secure.error.input.stories';
import LargeErrorMessage from './components/sl-error-message/error.message.large.stories';
import SmallErrorMessage from './components/sl-error-message/error.message.small.stories';
import Button from './components/sl-button/button.stories';

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
  .add('Button', () => <Button/>);
