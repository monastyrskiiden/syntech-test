import React from 'react';

const InputField = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, active },
}) => (
  <div>
    <label>
      {active ? (
        <span style={{ color: '#0497f8' }}>{label}</span>
      ) : touched && error ? (
        <span style={{ color: 'red' }}>{error}</span>
      ) : (
        label
      )}
      <div>
        <input {...input} placeholder={placeholder} type={type} />
      </div>
    </label>
  </div>
);

export default InputField;
