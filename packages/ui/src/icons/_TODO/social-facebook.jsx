import React from 'react';

function Facebook(props) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M18.9 20H1.1C.5 20 0 19.5 0 18.9V1.1C0 .5.5 0 1.1 0h17.8c.6 0 1.1.5 1.1 1.1v17.8c0 .6-.5 1.1-1.1 1.1zm-5.2 0v-7.8h2.6l.4-3h-3v-2c0-.8.3-1.4 1.5-1.4h1.6V3.1L14.5 3c-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.6V20h3.1z" />
    </svg>
  );
}

Facebook.defaultProps = {
  fill: 'currentColor',
  width: 20,
  height: 20,
};

export default Facebook;
