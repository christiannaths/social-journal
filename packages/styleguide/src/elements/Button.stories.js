import React from 'react';
import { Button } from '@orca/ui/elements';

export const withText = () => <Button text="Hello Button" />;
export const withIcon = () => <Button text="<" />;

export default {
  title: 'Elements/Button',
  component: Button,
};
