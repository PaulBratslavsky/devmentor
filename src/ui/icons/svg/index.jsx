import React from 'react';

export function Svg({ children, style = {} }) {
  return (
    <svg
      style={style}
      viewBox='0 0 1024 1024'
      width='1em'
      height='1em'
      fill='currentColor'
      aria-hidden='true'>
      {children}
    </svg>
  );
}
