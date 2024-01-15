import React, { useEffect, useMemo, useRef, useState } from 'react';
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
      label = 'hello',
      mode = 'text',
      placeholder = '',
      fontsize = 14,
      ...rest
    },
    ref,
  ) => {
    const mainClass = classNames(styles['base'], styles[disabled ? 'disabled' : '']);
    const [isUpLabel, setIsUpLabel] = useState<boolean>(false);
    const InputClass = classNames(styles['inputBase']);
    const buttonRef = useRef<HTMLDivElement | null>(null);
    const [value, setValue] = useState<string>('');

    const upLabel = () => {
      if (!disabled) setIsUpLabel(true);
    };

    const showPlaceholder = useMemo(() => {
      if (isUpLabel) return placeholder;
      else return undefined;
    }, [isUpLabel, placeholder]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
          setIsUpLabel(false);
        }
      };

      document.addEventListener('click', handleClickOutside);

      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <div
        onClick={upLabel}
        className={mainClass}
        ref={buttonRef}
        style={{ fontSize: fontsize }}
      >
        {label && (
          <div className={`${styles['label']} ${isUpLabel || value ? styles['upLabel'] : ''} `}>
            {label}
          </div>
        )}
        <input
          style={{ width: width }}
          ref={ref}
          className={InputClass}
          disabled={disabled}
          type={mode}
          onChange={handleInput}
          placeholder={showPlaceholder}
          {...rest}
        />
      </div>
    );
  },
);

Input.displayName = 'Input';
