import React from 'react';
import { render } from '@testing-library/react';
import Component from './component';

test('renders learn react link', () => {
  const { getByText } = render(<Component />);
  const text = getByText(/Simple Button/i);
  expect(text).toBeInTheDocument();
});
