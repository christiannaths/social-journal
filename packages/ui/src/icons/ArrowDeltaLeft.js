import React from 'react';
import styled from 'styled-components/macro';

const SvgComponent = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" {...props}>
    <path d="M11.596 2.414L5.01 9a1.414 1.414 0 000 2l6.571 6.571.015.015a1.414 1.414 0 002.414-.986V3.4a1.414 1.414 0 00-2.414-.987z" />
  </svg>
);

const SvgArrowDeltaLeft = styled(SvgComponent)`
  fill: currentColor;
  vertical-align: middle;
`;
export default SvgArrowDeltaLeft;
