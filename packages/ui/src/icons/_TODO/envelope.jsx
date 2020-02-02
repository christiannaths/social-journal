import React from 'react';
import styled from 'styled-components/macro';

const Svg = styled.svg``;

Svg.defaultProps = {
  width: '1em',
  fill: 'currentColor',
  xmlns: 'http://www.w3.org/2000/svg',
};

function Envelope(props) {
  return (
    <Svg height={props.width} {...props} viewBox="0 0 50 50">
      <path d="M 0 7 L 0 9.875 L 25 29.71875 L 50 10.125 L 50 7 Z M 0 12.40625 L 0 43 L 50 43 L 50 12.65625 L 25.625 31.78125 C 25.445313 31.921875 25.21875 32 25 32 C 24.78125 32 24.558594 31.925781 24.375 31.78125 Z " />
    </Svg>
  );
}

export default Envelope;