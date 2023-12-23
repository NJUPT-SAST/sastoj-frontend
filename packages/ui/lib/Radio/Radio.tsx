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
  value?: string;
}

export const Radio = React.forwardRef<HTMLDivElement, RadioProps>(
  ({ color = 'primary', size = 'medium', disabled = false, children = 'radio', ...rest }, ref) => {
    const radioClass = classNames(
      styles['base'],
      styles[color],
      styles[size],
      styles[disabled ? 'disabled' : ''],
    );

    return (
      <div
        className={radioClass}
        {...rest}
        ref={ref}
      >
        <input
          type="radio"
          value="option1"
          className={styles['radioItem']}
          id={children}
          disabled={disabled}
        />
        <label htmlFor={children}>
          <span className={styles['radioSpan']}> {children}</span>
        </label>
      </div>
    );
  },
);

Radio.displayName = 'Radio';
