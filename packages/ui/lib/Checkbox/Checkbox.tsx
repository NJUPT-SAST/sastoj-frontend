import React, { useEffect, useState } from 'react';
import styles from './Checkbox.module.scss';
import classNames from 'classnames';
export interface CheckboxProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   *label of the checkbox
   */
  label?: string;
  /**
   * diabled of the checkbox
   */
  disabled?: boolean;
  /**
   * onchange of the checkbox
   */
  onChecked?: (value: boolean) => void;
}

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ label = 'SAST', disabled = false, onChecked = function () {}, ...rest }, ref) => {
    const checkboxClass = classNames(`${styles['base']} ${styles[disabled ? 'disabled' : '']}`);
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleChecked = () => {
      setIsChecked(!isChecked);
    };

    useEffect(() => {
      onChecked(isChecked);
    }, [isChecked, onChecked]);

    return (
      <div
        className={checkboxClass}
        onClick={handleChecked}
      >
        <button
          id="checkbox"
          disabled={disabled}
          className={`${styles['checkboxButton']} ${styles[isChecked ? 'checked' : '']}`}
          ref={ref}
          {...rest}
        >
          {isChecked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 24 24"
            >
              <path
                className={`${styles['checkPath']} ${styles[isChecked ? 'checked' : '']}`}
                fill="none"
                stroke="white"
                strokeWidth="4.5"
                d="M4 12 L9 17 L20 6"
              />
            </svg>
          )}
        </button>
        <label className={styles['labelSpan']}>{label}</label>
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';
