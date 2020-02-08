import React from 'react';
import { View, Text, Button } from '@orca/ui/elements';

export const withText = () => <Button children="› Hello Button" />;

export const withIcon = () => <Button children="<" />;

export default {
  title: 'Elements/Button',
  component: Button,
};
