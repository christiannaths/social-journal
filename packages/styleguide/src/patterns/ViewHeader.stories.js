import React from 'react';
import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { ViewHeader } from '@orca/ui/patterns';

export const Simple = () => (
  <ViewHeader>
    <ViewHeader.LeftButton
      children={text('Left Button Text', 'Back')}
      onClick={action('Left button click')}
    />
    <ViewHeader.Title children={text('Title', 'Hello World')} />
    <ViewHeader.RightButton
      children={text('Right Button Text', 'Save')}
      onClick={action('Right button click')}
    />
  </ViewHeader>
);

export default {
  title: 'Patterns/ViewHeader',
  component: ViewHeader,
  subcomponents: {
    'ViewHeader.Title': ViewHeader.Title,
    'ViewHeader.LeftButton': ViewHeader.LeftButton,
    'ViewHeader.RightButton': ViewHeader.RightButton,
  },
  decorators: [withKnobs],
};
