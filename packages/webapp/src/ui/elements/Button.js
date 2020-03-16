import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import theme from '../theme';

const StyledButton = styled.button`
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
  position: relative;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    left: 0%;
    top: ${theme.lineHeight / 3}px;
    height: ${theme.lineHeight / 4}px;
    right: 100%;
    background: #f6f343aa;
    mix-blend-mode: darken;
    transition: right 350ms ease;
  }
  &:focus {
    outline: none;
  }

  &:hover {
    outline: none;

    &:after {
      right: 0%;
    }
  }
`;

/**
 * `import { Button } from '@orca/ui/elements`
 */
function Button(props) {
  return <StyledButton {...props} />;
}

export default Button;
