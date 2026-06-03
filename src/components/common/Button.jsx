import React from 'react';

/**
 * Design System Core Button with built-in Tailwind v4 interactive states.
 */
export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) {
  const baseStyle = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer focus:outline-none tracking-wide select-none active:scale-[0.98]';
  
  const variants = {
    primary: 'bg-primary-blue text-secondary-white hover:bg-blue-700 shadow-md shadow-blue-900/10',
    secondary: 'bg-primary-green text-secondary-white hover:bg-green-700 shadow-md shadow-green-900/10',
    accent: 'bg-accent-orange text-secondary-white hover:bg-orange-700 shadow-md shadow-orange-900/10',
    purple: 'bg-accent-purple text-secondary-white hover:bg-purple-700 shadow-md shadow-purple-900/10',
    outline: 'border-2 border-primary-blue text-primary-blue hover:bg-primary-blue/5',
    ghost: 'text-text-muted hover:text-text-dark hover:bg-secondary-gray-dark'
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5'
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}