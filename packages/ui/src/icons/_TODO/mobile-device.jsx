import React from 'react';
import styled from 'styled-components/macro';

const Svg = styled.svg``;

Svg.defaultProps = {
  width: '1em',
  fill: 'currentColor',
  xmlns: 'http://www.w3.org/2000/svg',
};

function MobileDevice(props) {
  return (
    <Svg height={props.width} {...props} viewBox="0 0 512 512">
      <path d="M358.9 32H153A41 41 0 0 0 112 72.7v366.6a41 41 0 0 0 41.1 40.7H359a41 41 0 0 0 41.1-40.7V72.7A41 41 0 0 0 358.9 32zm5.1 368H148V112h216v288z" />
    </Svg>
  );
}

export default MobileDevice;
