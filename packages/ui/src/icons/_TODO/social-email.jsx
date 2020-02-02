import React from 'react';

function Email(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M 4 4 C 2.895 4 2 4.895 2 6 L 2 18 C 2 19.105 2.895 20 4 20 L 20 20 C 21.105 20 22 19.105 22 18 L 22 6 C 22 4.895 21.105 4 20 4 L 4 4 z M 4 6 L 20 6 L 20 7.0019531 L 12 12 L 4 7.0019531 L 4 6 z M 4 9.0019531 L 12 14 L 20 9.0019531 L 20 18 L 4 18 L 4 9.0019531 z" />
    </svg>
  );
}

Email.defaultProps = {
  fill: 'currentColor',
  width: 24,
  height: 24,
};

export default Email;
