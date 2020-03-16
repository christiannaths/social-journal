import React from 'react';

function withKeyboardControl(Component) {
  return function(props) {
    return <Component {...props} keyboardControl={true} />;
  };
}

export default withKeyboardControl;
