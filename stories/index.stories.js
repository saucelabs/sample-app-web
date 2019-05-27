import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import Inputs from './components/Inputs'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={ linkTo('Button') }/>);

storiesOf('Components', module)
  .add('Input', () => <Inputs/>)
