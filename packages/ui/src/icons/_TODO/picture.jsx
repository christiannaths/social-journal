import React from 'react';

function Picture(props) {
  return (
    <svg width={19} height={16} viewBox="0 0 19 16" {...props}>
      <g stroke="none" fill="none" transform="translate(-114.000000, -10.000000)">
        <g transform="translate(114.000000, 10.000000)" fill="#FFFFFF">
          <path d="M16.4783696,13.2408421 C16.4085652,13.3835789 16.2652391,13.4736842 16.1086957,13.4736842 L2.89130435,13.4736842 C2.73104348,13.4736842 2.58523913,13.3789474 2.5175,13.2311579 C2.44934783,13.0833684 2.47165217,12.9086316 2.57408696,12.7827368 L6.70452174,7.73010526 C6.77886957,7.63915789 6.88708696,7.58442105 7.00315217,7.57936842 C7.12004348,7.57094737 7.23197826,7.61810526 7.31417391,7.70231579 L8.62930435,9.04294737 L10.8221522,6.06315789 C10.9778696,5.85094737 11.3268913,5.85094737 11.4826087,6.06315789 L16.4391304,12.8 C16.5333043,12.9275789 16.5481739,13.0981053 16.4783696,13.2408421 M4.13043478,2.52631579 C5.0416087,2.52631579 5.7826087,3.28168421 5.7826087,4.21052632 C5.7826087,5.13936842 5.0416087,5.89473684 4.13043478,5.89473684 C3.21967391,5.89473684 2.47826087,5.13936842 2.47826087,4.21052632 C2.47826087,3.28168421 3.21967391,2.52631579 4.13043478,2.52631579 M17.2243261,0 L1.77608696,0 C0.79676087,0 0,0.755368421 0,1.68421053 L0,14.3157895 C0,15.2446316 0.79676087,16 1.77608696,16 L17.2243261,16 C18.2036522,16 19,15.2446316 19,14.3157895 L19,1.68421053 C19,0.755368421 18.2036522,0 17.2243261,0" />
        </g>
      </g>
    </svg>
  );
}

export default Picture;
