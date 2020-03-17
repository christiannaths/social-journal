import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import theme from '../theme';

const Div = styled.div`
  padding: 2rem 1.5rem;
`;

/**
 * `import { Panel } from '@orca/ui/elements`
 */
function Panel(props) {
  return <Div {...props} />;
}

export default Panel;
