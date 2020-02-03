import React from 'react';
import { Button as Button2 } from '@orca/ui/elements';

export const withText = () => <Button2 text="Hello Button2" />;
export const withIcon = () => <Button2 text="<" />;

export default {
  title: 'Typography/Button2',
  component: Button2,
};
