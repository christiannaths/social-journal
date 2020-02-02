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
    <Svg height={props.width} {...props} viewBox="0 0 512 512">
      <path d="M256 500a244 244 0 1 1 0-488 244 244 0 0 1 0 488zm42.5-243.5L197.9 361a6.8 6.8 0 0 0 0 9.5l18 18.4a6.5 6.5 0 0 0 9.4.1l122.9-127.7c1.2-1.3 1.8-3 1.8-4.9.1-1.7-.5-3.5-1.8-4.8L225.3 123.9a6.5 6.5 0 0 0-9.3.1l-18 18.4a6.8 6.8 0 0 0-.1 9.5l100.6 104.6z" />
    </Svg>
  );
}

export default Chevron;
