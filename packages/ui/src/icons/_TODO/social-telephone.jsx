import React from 'react';

function Telephone(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M20.023,15.488c-0.63-0.015-1.423-0.052-1.924-0.14c-0.542-0.096-1.194-0.282-1.653-0.425 c-0.36-0.112-0.752-0.013-1.019,0.253L13.21,17.38c-1.532-0.807-2.759-1.747-3.798-2.792c-1.045-1.039-1.985-2.266-2.792-3.798 l2.204-2.218C9.09,8.305,9.189,7.913,9.077,7.553C8.935,7.095,8.748,6.443,8.653,5.901C8.564,5.4,8.528,4.607,8.512,3.977 C8.499,3.432,8.055,3,7.51,3H4C3.562,3,3,3.328,3,4c0,4.539,1.84,8.874,4.966,12.034C11.126,19.16,15.461,21,20,21 c0.672,0,1-0.562,1-1v-3.51C21,15.945,20.568,15.501,20.023,15.488z" />
    </svg>
  );
}

Telephone.defaultProps = {
  fill: 'currentColor',
  width: 24,
  height: 24,
};

export default Telephone;
