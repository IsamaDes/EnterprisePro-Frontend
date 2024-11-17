import React from 'react';

interface LabelProps {
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ htmlFor, className = '', children }) => {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-semibold ${className}`}>
      {children}
    </label>
  );
};
