import React from 'react';
import './styles.css';

export default function Checkbox({ label, value, onChange }) {
  const state =
    value === true
      ? 'checked'
      : value === false
      ? 'unchecked'
      : 'indeterminate';

  return (
    <>
      <label>
        <span className='checkbox'>
          <span className={`inner ${state}`}></span>
        </span>
        {label}
      </label>
    </>
  );
}
