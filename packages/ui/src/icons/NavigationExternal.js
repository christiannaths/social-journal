import React from 'react';
import styled from 'styled-components/macro';

const SvgComponent = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" {...props}>
    <path d="M7 2v2H4v12h12v-3h2v4a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1h4zm10 0a1 1 0 011 1v6h-2V5.499L9.75 11.75l-1.5-1.5L14.499 4H11V2h6z" />
  </svg>
);

const SvgNavigationExternal = styled(SvgComponent)`
  fill: currentColor;
  vertical-align: middle;
`;
export default SvgNavigationExternal;
