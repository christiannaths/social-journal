import React from 'react';

function Close(props) {
  return (
    <svg width={18} height={18} viewBox="0 0 18 18" {...props}>
      <path
        d="M8.914 7.5L2.197.782A1 1 0 1 0 .782 2.197L7.5 8.914.782 15.632a1 1 0 1 0 1.415 1.414l6.717-6.718 6.718 6.718a1 1 0 1 0 1.414-1.414l-6.718-6.718 6.718-6.717A1 1 0 1 0 15.632.782L8.914 7.5z"
        fill="#000"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Close;
