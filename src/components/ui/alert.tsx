import React from 'react';

interface AlertProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'destructive' | 'success' | 'info';
}

export const Alert: React.FC<AlertProps> = ({ children, className = '', variant = 'info' }) => {
  const variantClasses = {
    destructive: 'bg-red-500 text-white',
    success: 'bg-green-500 text-white',
    info: 'bg-blue-500 text-white',
  };

  return (
    <div className={`p-4 rounded-md ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

export const AlertDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>{children}</div>
);
