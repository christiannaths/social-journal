import React from 'react';

function Plus(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <path d="M12.914 10.914v-9.5a1 1 0 1 0-2 0v9.5h-9.5a1 1 0 1 0 0 2h9.5v9.5a1 1 0 1 0 2 0v-9.5h9.5a1 1 0 1 0 0-2h-9.5z" />
    </svg>
  );
}

Plus.defaultProps = {
  tooltip: '',
};

export default Plus;
