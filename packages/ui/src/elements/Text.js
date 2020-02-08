import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const H2 = styled.p`
  font-weight: regular;

  & > strong {
    display: block;
    font-weight: bold;
  }

  & > small {
    display: block;
    font-size: 0.777777778em;
  }
`;

/**
 * `import { Text } from '@orca/ui/elements`
 */
function Text(props) {
  return <H2 {...props} />;
}

export default Text;
