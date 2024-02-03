import React from 'react';
import styles from './Button.module.scss';
import classnames from 'classnames';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The color of the button.
   */
  color?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The shadow of the button.
   */
  shadow?: 'regular' | 'small' | 'medium' | 'large' | 'extraLarge' | 'inner' | 'none';
  /**
   * If `true`, the button will be disabled.
   */
  disabled?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color = 'primary', shadow = 'none', size = 'medium', disabled = false, ...rest }, ref) => {
    const btnClass = classnames(
      styles['base'],
      styles[color],
      styles[size],
      styles[disabled ? 'disabled' : ''],
      styles[`shadow-${shadow}`],
    );
    return (
      <button
        ref={ref}
        className={btnClass}
        {...rest}
        disabled={disabled}
      />
    );
  },
);

Button.displayName = 'Button';
