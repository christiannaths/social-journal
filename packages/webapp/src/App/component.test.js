import React from 'react';
import { render } from '@testing-library/react';
import Component from './component';

test('renders learn react link', () => {
  const { getByText } = render(<Component />);
  const text = getByText(/hello world/i);
  expect(text).toBeInTheDocument();
});
