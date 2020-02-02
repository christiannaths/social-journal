import React from 'react';
import styled from 'styled-components/macro';

const SvgComponent = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" {...props}>
    <path d="M8 18l-1.5-1.5L13 10 6.5 3.5 8 2l7.293 7.293a1 1 0 010 1.414L8 18z" />
  </svg>
);

const SvgArrowChevronRight = styled(SvgComponent)`
  fill: currentColor;
  vertical-align: middle;
`;
export default SvgArrowChevronRight;
