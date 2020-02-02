import React from 'react';
import styled from 'styled-components/macro';

const SvgComponent = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" {...props}>
    <path d="M2 7l1.5-1.5L10 12l6.5-6.5L18 7l-7.293 7.293a1 1 0 01-1.414 0L2 7z" />
  </svg>
);

const SvgArrowChevronDown = styled(SvgComponent)`
  fill: currentColor;
  vertical-align: middle;
`;
export default SvgArrowChevronDown;
