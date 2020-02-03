import React from 'react';
import { Meta, Story, Preview } from '@storybook/addon-docs/blocks';
import { ListView } from '@orca/ui/patterns';

export const Simple = () => (
  <ListView>
    <ListView.Item title="Item 1" />
    <ListView.Item title="Item 2" />
    <ListView.Item title="Item 3" />
  </ListView>
);

export default {
  title: 'Patterns/ListView',
  component: ListView,
  subcomponents: {
    'ListView.Item': ListView.Item,
    'ListView.Section': ListView.Section,
  },
};
