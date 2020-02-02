import React from 'react';

function Logo(props) {
  return (
    <svg width={33} height={30} viewBox="0 0 33 30" {...props}>
      <g
        fill="#000"
        fillRule="evenodd"
        fontFamily=".AppleSystemUIFont"
        letterSpacing={-0.287}
        fontSize={19}
      >
        <text transform="translate(0 -4)">
          <tspan x={0} y={18}>
            TAP
          </tspan>
        </text>
        <text transform="translate(0 -4)">
          <tspan x={0} y={32.25}>
            BIO
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default Logo;
