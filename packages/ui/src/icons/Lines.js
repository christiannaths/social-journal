import React from 'react';
import styled from 'styled-components/macro';

const SvgComponent = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <g fill="currentColor">
      <path d="M2 2h11v2H2zM14.5 8.5L16 10l-8 8-1.5-1.5zM13 5l1 2-10 5-1-2zM17 10l2 1-5 10-2-1zM20 11h2v11h-2z" />
    </g>
  </svg>
);

const SvgLines = styled(SvgComponent)`
  fill: currentColor;
  vertical-align: middle;
`;
export default SvgLines;
