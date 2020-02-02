import React from 'react';
import styled from 'styled-components/macro';

const SvgComponent = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" {...props}>
    <path d="M2 13l7.293-7.293a1 1 0 011.414 0L18 13l-1.5 1.5L10 8l-6.5 6.5L2 13z" />
  </svg>
);

const SvgArrowChevronUp = styled(SvgComponent)`
  fill: currentColor;
  vertical-align: middle;
`;
export default SvgArrowChevronUp;
