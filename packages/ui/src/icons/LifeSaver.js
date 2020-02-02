import React from 'react';
import styled from 'styled-components/macro';

const SvgComponent = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" {...props}>
    <path d="M10 2a8 8 0 110 16 8 8 0 010-16zM5.808 14.293L5.1 15a6.975 6.975 0 004.65 2.044l.3.006v-1a5.981 5.981 0 01-4.243-1.757zM10 5a5 5 0 100 10 5 5 0 000-10zm7 5h-1a5.981 5.981 0 01-1.757 4.243l.707.707A6.978 6.978 0 0017 10zM5.05 5.05A6.978 6.978 0 003 10h1c0-1.536.586-3.071 1.757-4.243L5.05 5.05zm5-2v1c1.536 0 3.071.586 4.243 1.758L15 5.1a6.978 6.978 0 00-4.95-2.05z" />
  </svg>
);

const SvgLifeSaver = styled(SvgComponent)`
  fill: currentColor;
  vertical-align: middle;
`;
export default SvgLifeSaver;
