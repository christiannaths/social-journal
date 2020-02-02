import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Layout = styled.button`
  background-color: blue;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  margin: 0.375rem 0.25rem;
`;

/**
 * `import Button from '@social-journal/ui/elements/Button`
 */
function Button(props) {
  const { text, ...rest } = props;

  return <Layout {...rest}>{text}</Layout>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
