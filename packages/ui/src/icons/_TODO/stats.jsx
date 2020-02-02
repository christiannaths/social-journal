import React from 'react';

function Stats(props) {
  return (
    <svg width={22} height={22} viewBox="0 0 40 40" {...props}>
      <path
        fill="#7758D5"
        d="m13.5 32.5v-25h5v25h-5z m-7.5 0v-7.5h5v7.5h-5z m15 0v-12.5h5v12.5h-5z m7.5 0v-17.5h5v17.5h-5z"
      />
    </svg>
  );
}

export default Stats;
