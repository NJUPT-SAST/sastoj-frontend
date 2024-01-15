import React from 'react';
import styles from './Button.module.scss';
import classnames from 'classnames';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The color of the button.
   */
  color?: 'primary' | 'secondary' | 'tertiary' | 'danger';

  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * If `true`, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * If `true`, the shadow will be appear
   */
  isShadow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color = 'primary', size = 'medium', disabled = false, isShadow = false, ...rest }, ref) => {
    const btnClass = classnames(
      styles['base'],
      styles[color],
      styles[size],
      styles[disabled ? 'disabled' : ''],
      styles[isShadow ? 'shadow' : ''],
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
