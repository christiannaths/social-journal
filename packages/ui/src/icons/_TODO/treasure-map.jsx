import React from 'react';

function TreasureMap(props) {
  return (
    <svg height={props.width} {...props}>
      <path d="M127 90.5l-23.7-44.1-19.7-10-19.6 10-19.6-10-19.7 10L1 90.5l31.4-15.7 31.6 16 31.6-16L127 90.5zM32.4 70.4l-1.6.8-20.5 10.3 5.4-10.2.7.3.5-1.2c-.1-.1-.4-.1-.5-.3l11.1-20.7 15.3-7.7-10.4 28.7zM64 61.9l-1-.3c-.3 1-.9 1.9-1.1 2.6l1.4.5c.2-.3.7-.5.7-.8v22L34.6 71.2l-.8-.3 7.8-22 .1 1h2.5v-1.4l-2.5.1 2.8-7.7 2.3 1.1 16.1 8 1.2.4v11.5H64zm29.8 9.3l-2.7 1.6h.2l-26 13.4V59.5v.3l1-2.3-.6-.8c-.2.4-.2.7-.2 1v-7l.8-.7 17.3-9 11 30-.8.2zm1.6-.8L84.8 41.6l15.7 8 17.2 32-20.5-10.4-1.8-.8zm-13-13.8l3.7 1.6-2.9 5.8 6.1 2.4-1.7 3.6-6-2.5-3 5.8-3.7-1.5 2.9-5.8-6.1-2.5 1.7-3.5 6.1 2.6 3-6zM47 49c.7.3 1.3.7 1.6 1.2.3.2.4.4.5.6l-.9.9-.4-.5-1.3-1L47 49zM28.6 69l1.8-1.7 1 1-2.1 1.7-.7-1zM51 59.3l-.1-.7 1.3-.1v.8l-.1 2.1-1.2-.3.1-1.8zm-19 6c.5-.9.7-1.5.9-2.3l1.2.3A8 8 0 0 1 33 66l-1-.8zm6.8-16.1l.4 1.3-2.2 1-.7-1.1c.7-.5 1.6-1 2.5-1.2zm-5 11.1l-1.3.3-.3-2.4v-.5l1.3.1v.4c0 .8.2 1.5.3 2.1zM19.2 71.2l2.4.2v1.4c-1 0-1.8-.2-2.7-.3l.3-1.3zM33 55c.4-1 .8-1.9 1.3-2.7l1 .8c-.5.7-.9 1.5-1.1 2.3L33 55zm-8.8 16c.8 0 1.5-.3 2.1-.7l.7 1.1-2.4 1h-.3l-.2-1.4h.1zm53.6-15c-.4-.6-1-1.1-1.6-1.7l.7-1.2a10 10 0 0 1 2 2.2l-1.1.8zm-11.1-1.5c.6-.8 1.4-1.5 2-1.9l.7 1.2-1.8 1.6-1-1zm-7.5 14.2l1.6-2 1 .6-1.6 2.3-1-1zM72.1 53l-.4-.1h-.1v-1.3h.5c.8 0 1.6.2 2.2.3l-.2 1.4c-.7-.2-1.3-.3-2-.3zM56.3 71a4 4 0 0 0 1-.7l.7 1c-.4.1-.6.4-1 .7-.4.2-1 .5-1.6.5v-1.3a2 2 0 0 0 1-.3zm-4.9-6.6a6 6 0 0 0-.4 2.1l-1.3.2c0-1 .1-1.9.5-2.8l.7.1-.6-.2.6.2.5.3v.1zm-.5-.4l.6.3-.6-.3zm1-8.2l-1.2.4c-.1-.8-.5-1.6-.9-2.4l1-.7c.5 1 .9 1.8 1.1 2.7zm-.2 13.1c.4.7.9 1.4 1.6 1.6l-.7 1.2a6.1 6.1 0 0 1-2-2.1l1-.7zm27.2-9.3v-1.2l1.1-.2c.2.5.2 1 .2 1.4h-1.3z" />
    </svg>
  );
}

TreasureMap.defaultProps = {
  width: 128,
  viewBox: '0 0 128 128',
  fill: 'currentColor',
  xmlns: 'http://www.w3.org/2000/svg',
};

export default TreasureMap;
