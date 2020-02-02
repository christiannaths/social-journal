import React from 'react';
import styled from 'styled-components/macro';

const SvgComponent = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" {...props}>
    <path d="M2.121 8.414A1.414 1.414 0 013.108 6h13.199a1.414 1.414 0 01.986 2.414l-.015.015L10.708 15a1.414 1.414 0 01-2 0L2.12 8.414z" />
  </svg>
);

const SvgArrowDeltaDown = styled(SvgComponent)`
  fill: currentColor;
  vertical-align: middle;
`;
export default SvgArrowDeltaDown;
