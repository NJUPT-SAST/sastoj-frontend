import classNames from 'classnames';
import React from 'react';
import styles from './Radio.module.scss';

export interface RadioProps {
  /**
   * The color of the Radio.
   */
  color?: 'primary' | 'warning' | 'danger';

  /**
   * The size of the Radio.
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * If `true`, the Radio will be disabled.
   */
  disabled?: boolean;
  /**
   * the children of the radio
   */
  children?: string;
  /**
   * the value of the radio
   */
  value: string;
  /**
   * the checked of the radio
   */
  checked?: boolean;
  /**
   * the onchange of the radio
   */
  onChange?: (value: string) => void;
}

export const Radio = React.forwardRef<HTMLDivElement, RadioProps>(
  (
    {
      color = 'primary',
      size = 'medium',
      value = '',
      disabled = false,
      children = 'radio',
      checked = false,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const radioClass = classNames(
      styles['base'],
      styles[color],
      styles[size],
      styles[disabled ? 'disabled' : ''],
    );

    const handleChange = () => {
      if (onChange) {
        onChange(value);
      }
    };

    return (
      <div
        className={radioClass}
        {...rest}
        ref={ref}
      >
        <input
          type="radio"
          value={value}
          className={styles['radioItem']}
          id={children}
          disabled={disabled}
          checked={checked}
          onChange={handleChange}
        />
        <label htmlFor={children}>
          <span className={styles['radioSpan']}> {children}</span>
        </label>
      </div>
    );
  },
);

Radio.displayName = 'Radio';
