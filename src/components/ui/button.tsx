import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, type, className = '', disabled = false }) => {
  return (
    <button type={type} className={`bg-blue-500 text-white px-4 py-2 rounded-md ${className}`} disabled={disabled}>
      {children}
    </button>
  );
};
