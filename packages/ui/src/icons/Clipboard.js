import React from 'react';
import styled from 'styled-components/macro';

const SvgComponent = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" {...props}>
    <path d="M10 1a2 2 0 012 2h4a1 1 0 011 1v13a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1l4-.001A2 2 0 0110 1zM7 5H5v11h10V5h-2v2H7V5zm3-2.75a.75.75 0 100 1.5.75.75 0 000-1.5z" />
  </svg>
);

const SvgClipboard = styled(SvgComponent)`
  fill: currentColor;
  vertical-align: middle;
`;
export default SvgClipboard;
