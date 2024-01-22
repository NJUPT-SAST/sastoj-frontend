import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
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
   * the value of the radio,if not provide ,the value is children
   */
  value?: string;
  /**
   * the checked of the radio
   */
  checked?: boolean;
  /**
   * the onchange of the radio (type:the type of the click(used for can cancel radio),value:string)
   */
  onChange?: (type: 'cancel' | 'add', value: string) => void;
  /**
   * isCanCancel if it is true the radio can cancel
   */
  isCanCancel?: boolean;
}

export const Radio = React.forwardRef<HTMLDivElement, RadioProps>(
  (
    {
      color = 'primary',
      size = 'medium',
      disabled = false,
      children = 'radio',
      value = children,
      checked = false,
      onChange,
      isCanCancel = false,
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
    const [isChecked, setIsChecked] = useState<boolean>(checked);

    const handleChange = () => {
      if (onChange) {
        !isChecked && onChange('add', value);
        isChecked && onChange('cancel', value);
      }
      if (isCanCancel) {
        setIsChecked(!isChecked);
      } else {
        setIsChecked(true);
      }
    };

    useEffect(() => {
      setIsChecked(checked);
    }, [checked]);

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
          checked={isChecked}
          onChange={function () {}}
          onClick={handleChange}
        />
        <label htmlFor={children}>
          <span className={styles['radioSpan']}> {children}</span>
        </label>
      </div>
    );
  },
);

Radio.displayName = 'Radio';
