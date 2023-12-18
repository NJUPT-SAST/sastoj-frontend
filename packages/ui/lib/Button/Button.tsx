import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The color of the button.
   */
  color?: 'primary' | 'success' | 'info' | 'warning' | 'error';

  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ ...rest }, ref) => (
  <button
    ref={ref}
    {...rest}
  />
));

Button.displayName = 'Button';
