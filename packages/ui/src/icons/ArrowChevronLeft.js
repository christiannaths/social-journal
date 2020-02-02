import React from 'react';
import styled from 'styled-components/macro';

const SvgComponent = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" {...props}>
    <path d="M12 18l-7.293-7.293a1 1 0 010-1.414L12 2l1.5 1.5L7 10l6.5 6.5L12 18z" />
  </svg>
);

const SvgArrowChevronLeft = styled(SvgComponent)`
  fill: currentColor;
  vertical-align: middle;
`;
export default SvgArrowChevronLeft;
