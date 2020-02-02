import React from 'react';

function Icon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      {...props}
      fill="none"
      stroke="#33114f"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}

Icon.defaultProps = {
  fill: 'currentColor',
  width: 24,
  height: 24,
};

export default Icon;
