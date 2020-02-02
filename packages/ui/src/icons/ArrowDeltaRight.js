import React from 'react';
import styled from 'styled-components/macro';

const SvgComponent = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" {...props}>
    <path d="M8.414 2.414L15 9a1.414 1.414 0 010 2l-6.571 6.571-.015.015A1.414 1.414 0 016 16.6V3.4a1.414 1.414 0 012.414-.987z" />
  </svg>
);

const SvgArrowDeltaRight = styled(SvgComponent)`
  fill: currentColor;
  vertical-align: middle;
`;
export default SvgArrowDeltaRight;
