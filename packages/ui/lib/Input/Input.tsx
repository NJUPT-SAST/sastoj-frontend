import React, { useState, type ChangeEvent, useEffect } from 'react';
import styles from './Input.module.scss';
import classnames from 'classnames';

export interface InputProps {
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
  /**
   * function(value:string, e:event) 输入框内容变化时的回调
   */
  onChange: (value: string, e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      width = 280,
      disabled = false,
      label = 'Eamil',
      mode = 'text',
      placeholder = '',
      fontsize = 16,
      onChange,
      ...rest
    },
    ref,
  ) => {
    //设置isUpLabel来调节Label上浮状态
    const [isUpInputLabel, setIsUpInputLabel] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const InputClass = classnames(styles['base'], styles[disabled ? 'disabled' : '']);
    useEffect(() => {
      if (placeholder) {
        setIsUpInputLabel(true);
      }
    }, [placeholder]);
    //设置，当input框里面没有内容时，placeHolder也没有内容时，将label框拉下
    const blurInput = () => {
      if (!inputValue && !placeholder) {
        setIsUpInputLabel(false);
      }
    };
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      onChange(e.target.value, e);
    };

    return (
      <>
        <div
          style={{ fontSize: `${fontsize}px` }}
          className={InputClass}
          onClick={() => !disabled && setIsUpInputLabel(true)}
        >
          <input
            id="input"
            className={styles['input']}
            ref={ref}
            placeholder={placeholder}
            type={mode}
            disabled={disabled}
            style={{ width: `${width}px` }}
            {...rest}
            onChange={changeValue}
            onBlur={blurInput}
          />
          <label
            htmlFor="input"
            className={`${styles['inputLabel']} ${isUpInputLabel ? styles['isUpInputLabel'] : ''}`}
          >
            {label}
          </label>
        </div>
      </>
    );
  },
);

Input.displayName = 'Input';
