import React from 'react';
import styled from 'styled-components/macro';

const SvgComponent = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" {...props}>
    <path d="M2.414 12.59L9 6.004a1.414 1.414 0 012 0l6.571 6.571.015.015a1.414 1.414 0 01-.986 2.414H3.4a1.414 1.414 0 01-.987-2.414z" />
  </svg>
);

const SvgArrowDeltaUp = styled(SvgComponent)`
  fill: currentColor;
  vertical-align: middle;
`;
export default SvgArrowDeltaUp;
