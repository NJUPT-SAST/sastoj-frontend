import React from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The width of the Input.
   */
  width?: number;
  /**
   * If `true`, the input will be disabled.
   */
  disabled?: boolean;
  /**
   * label,the label of the input
   */
  label?: React.ReactNode;
  /**
   * The type of the mode.
   */
  mode?: 'text' | 'password';
  /**
   * placeholder,the placeholder of the input
   */
  placeholder?: string;
  /**
   * placeholder,the placeholder of the input
   */
  fontsize?: number;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      width = 280,
      disabled = false,
      label = null,
      mode = 'text',
      placeholder = '',
      fontsize = 14,
      ...rest
    },
    ref,
  ) => {
    const InputClass = classNames(styles['inputBase']);
    const mainClass = classNames(styles['base'], styles[disabled ? 'disabled' : '']);

    return (
      <div
        className={mainClass}
        style={{ fontSize: fontsize }}
      >
        {label && <div className={styles['label']}>{label}</div>}
        <input
          style={{ width: width }}
          ref={ref}
          className={InputClass}
          disabled={disabled}
          type={mode}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    );
  },
);

Input.displayName = 'Input';
