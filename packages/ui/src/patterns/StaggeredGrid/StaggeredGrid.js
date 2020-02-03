import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import calculateRows from './calculateRows';

const Layout = styled.div`
  width: 100%;

  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(${calculateRows}, 24px);
  grid-auto-flow: dense;

  justify-content: center;
  padding: 0 5px;

  --small: span 9;
  --large: span 10;

  & > * {
    grid-row: auto / var(--small);
  }

  & > *:nth-child(2n -1) {
    grid-column: 1 / span 1;
  }

  & > *:nth-child(2n) {
    grid-column: 2 / span 1;
  }

  & > *:nth-child(6n - 5) {
    grid-row: auto / var(--large);
  }

  & > *:nth-child(6n) {
    grid-row: auto / var(--large);
  }
`;

/**
 * `import { StaggeredGrid } from '@orca/ui/elements`
 */
function StaggeredGrid(props) {
  return <Layout {...props} n={props.children.length} />;
}

StaggeredGrid.displayName = 'StaggeredGrid';

StaggeredGrid.propTypes = {};

export default StaggeredGrid;
