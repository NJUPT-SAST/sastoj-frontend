import React, { useState } from 'react';
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
   * type of the checkbox
   */
}

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ label = 'SAST', disabled = false, ...rest }, ref) => {
    const checkboxClass = classNames(styles['base']);
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleChecked = () => {
      if (disabled === false) setIsChecked(!isChecked);
    };
    return (
      <div
        className={checkboxClass}
        onClick={handleChecked}
      >
        <button
          id="checkbox"
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
