import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 65px;
  background: inherit;
  text-align: center;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
`;

/**
 * `import { ViewHeader } from '@orca/ui/elements`
 */
function ViewHeader(props) {
  return <Layout {...props} n={props.children.length} />;
}

ViewHeader.propTypes = {
  children: PropTypes.any.isRequired,
};

ViewHeader.displayName = 'ViewHeader';

export default ViewHeader;
