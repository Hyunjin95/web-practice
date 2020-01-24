import React from 'react';

interface Props {
  children: JSX.Element;
}

const Scroll = ({ children }: Props): JSX.Element => (
  <div
    style={{
      overflowY: 'scroll',
      border: '1px solid black',
      height: '500px',
    }}
  >
    {children}
  </div>
);

export default Scroll;
