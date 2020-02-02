import React from 'react';

function Pinterest(props) {
  return (
    <svg viewBox="0 0 21 21" {...props}>
      <path d="M6.4 19.3c1.5-1.1 2-3.2 2.4-5.3.8.4 1.3 1 2.3 1 3.8.3 6-3.6 5.4-7.2-.4-3.2-3.8-4.8-7.3-4.4-2.9.3-5.7 2.4-5.8 5.5 0 2 .7 3.3 2.6 3.7l.3-1.3s-.8-.8-1-1.4c-.6-4 5-6.8 8-4 2 2 .7 8-2.6 7.5-3.2-.6 1.5-5.5-1-6.4-2-.8-3.1 2.3-2.2 3.9-.5 2.6-1.7 5-1.3 8.3a10 10 0 1 1 .2.1z" />
    </svg>
  );
}

Pinterest.defaultProps = {
  fill: 'currentColor',
  width: 24,
  height: 24,
};

export default Pinterest;
