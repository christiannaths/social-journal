import React from 'react';
import styled from 'styled-components/macro';

const SvgComponent = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" {...props}>
    <g fill="currentColor">
      <path d="M13.5 15L12 13.5l2.499-2.5H7.5V9h6.999L12 6.5 13.5 5l4.293 4.293a1 1 0 010 1.414L13.5 15z" />
      <path d="M7 2v2H4v12h3v2H3a1 1 0 01-1-1V3a1 1 0 011-1h4z" />
    </g>
  </svg>
);

const SvgNavigationExit = styled(SvgComponent)`
  fill: currentColor;
  vertical-align: middle;
`;
export default SvgNavigationExit;
