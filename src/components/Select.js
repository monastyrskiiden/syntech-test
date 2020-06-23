import React from 'react';

const Select = ({ input, label, children }) => (
  <div className="select">
    <label className="select__label">{label}</label>
    <select className="select__input" {...input}>
      {children}
    </select>
  </div>
);

export default Select;
