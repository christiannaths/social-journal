import React from 'react';
import styled from 'styled-components/macro';

const Svg = styled.svg``;

Svg.defaultProps = {
  width: '1em',
  fill: 'currentColor',
  xmlns: 'http://www.w3.org/2000/svg',
};

function Chevron(props) {
  return (
    <Svg height={props.width} {...props} viewBox="0 0 24 24">
      <polygon points="6 11 16 22 18 19.8 10 11 18 2.2 16 0" />
    </Svg>
  );
}

export default Chevron;
