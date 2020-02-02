import React from 'react';
import Button from './Button';

export const withText = () => <Button text="Hello Button" />;
export const withIcon = () => <Button text="<" />;

export default {
  title: 'Button',
  component: Button,
};
