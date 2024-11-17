import React from 'react';

interface InputProps {
  id: string;
  type: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  required?: boolean;
  name?: string;
  accept?: string;
}

export const Input: React.FC<InputProps> = ({
  id,
  type,
  value,
  onChange,
  className = '',
  required,
  name,
  accept,
}) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`px-4 py-2 rounded-md border ${className}`}
      required={required}
      accept={accept}
    />
  );
};
