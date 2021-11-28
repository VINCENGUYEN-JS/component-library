import React from 'react';

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>(({ children, ...props }, ref) => {
  return (
    <button ref={ref} type="button" {...props}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
