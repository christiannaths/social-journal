import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import theme from '../theme';

const Div = styled.div`
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize}px;
  line-height: ${theme.lineHeight}px;
  color: ${theme.black};

  section {
    margin: ${theme.lineHeight}px 0;
  }
`;

/**
 * `import { View } from '@orca/ui/elements`
 */
function View(props) {
  return <Div {...props} />;
}

export default View;
