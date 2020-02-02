import React from 'react';

function Trash(props) {
  return (
    <svg
      width={18}
      height={22}
      viewBox="0 0 24 24"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path id="a" d="M0 6h28v28H0z" />
      </defs>

      <g id="surface1">
        <path
          fill="#ffffff"
          d="M 6 2 L 6 4 L 5 4 C 3.898438 4 3 4.898438 3 6 L 3 20 C 3 21.101563 3.898438 22 5 22 L 19 22 C 20.101563 22 21 21.101563 21 20 L 21 6 C 21 4.898438 20.101563 4 19 4 L 18 4 L 18 2 L 16 2 L 16 4 L 8 4 L 8 2 Z M 5 9 L 19 9 L 19 20 L 5 20 Z M 12 13 L 12 18 L 17 18 L 17 13 Z "
        />
      </g>
    </svg>
  );
}

export default Trash;
