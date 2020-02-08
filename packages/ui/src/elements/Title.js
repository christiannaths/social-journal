import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import theme from '../theme';

const H2 = styled.h2`
  font-size: ${theme.fontSizes[2]}px;
  line-height: ${theme.lineHeight}px;
  font-weight: bold;
  margin: ${theme.lineHeight}px 0;

  & > small {
    display: block;
    font-size: ${theme.fontSize}px;
    line-height: ${theme.lineHeight}px;
  }
`;

/**
 * `import { Title } from '@orca/ui/elements`
 */
function Title(props) {
  return <H2 {...props} />;
}

export default Title;
