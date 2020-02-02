import React from 'react';

function StoryCardIcon(props) {
  return (
    <svg
      width={20}
      height={24}
      viewBox="0 0 20 24"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <rect id="a" x={4.8} width={10.4} height={20} rx={1.5} />
      </defs>
      <g transform="translate(0 2)" fill="none" fillRule="evenodd">
        <rect fill="#ADADAD" x={8} y={2} width={12} height={16} rx={2} />
        <rect fill="#ADADAD" y={2} width={12} height={16} rx={2} />
        <use fill="#ADADAD" xlinkHref="#a" />
        <rect stroke="#F9F9F9" strokeWidth={2} x={3.8} y={-1} width={12.4} height={22} rx={1.5} />
      </g>
    </svg>
  );
}

export default StoryCardIcon;
