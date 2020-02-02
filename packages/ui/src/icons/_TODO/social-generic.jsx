import React from 'react';

function Generic(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M256 512a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm67.7-191a38.3 38.3 0 0 0-27.4 10.5l-100.4-58c.7-3.5 1.4-6.3 1.4-9.8 0-3.5-.7-6.3-1.4-9.8l99-57.3a42.3 42.3 0 0 0 71-30.7 42.1 42.1 0 0 0-84.3 0c0 3.5.7 6.3 1.4 9.8L184 233a42.3 42.3 0 0 0-28.8-11.2 41.5 41.5 0 0 0-41.4 41.9 42.1 42.1 0 0 0 70.9 30.7l99.7 58a35 35 0 0 0-1.4 9 40.6 40.6 0 0 0 81.4 0 40.6 40.6 0 0 0-40.7-40.4z" />
    </svg>
  );
}

Generic.defaultProps = {
  fill: 'currentColor',
  width: 20,
  height: 20,
};

export default Generic;
