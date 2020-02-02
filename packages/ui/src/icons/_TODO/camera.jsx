import React from 'react';

function Camera(props) {
  return (
    <svg height={props.width} {...props}>
      <path d="M430.4 147h-67.5l-40.4-40.8-.3-.2-.2-.2c-6-6-14.1-9.8-23.3-9.8h-84a33 33 0 0 0-24.6 10.9v.1l-39.5 40h-69A33.2 33.2 0 0 0 48 180.2v202.1c0 18.6 15 33.7 33.6 33.7h348.8a33.7 33.7 0 0 0 33.6-33.7V180.2a33.3 33.3 0 0 0-33.6-33.2zM256 365.5a92.7 92.7 0 0 1 0-185.2 92.5 92.5 0 0 1 0 185.2zm168.1-165a14 14 0 0 1-14-14.1 14 14 0 0 1 14-14.1 14 14 0 0 1 14 14.1 14 14 0 0 1-14 14.1zM256.8 202a70 70 0 1 1-.2 139.8 70 70 0 0 1 .2-139.8z" />
    </svg>
  );
}

Camera.defaultProps = {
  width: 24,
  viewBox: '0 0 512 512',
  fill: 'currentColor',
  xmlns: 'http://www.w3.org/2000/svg',
};

export default Camera;
