import React, { useState } from 'react';
import styles from './Select.module.scss';
import classNames from 'classnames';

interface Option {
  value: string;
  label: string;
  key: number;
}

export interface SelectProps {
  /**
   * onChange of the select
   */
  onChange: (value: Option) => void;
  /**
   * the optionList of the select
   */
  optionsList?: Array<Option>;
  /**
   * the title of the select
   */
  title?: string;
  /**
   * diabled of the select
   */
  disabled?: boolean;
}

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      optionsList = [
        { value: 'nextjs', label: 'nextjs', key: 3 },
        { value: 'nuxtjs', label: 'nuxtjs', key: 5 },
      ],
      title = 'which framwork?',
      onChange,
      disabled = false,
      ...rest
    },
    ref,
  ) => {
    const [visible, setVisble] = useState<boolean>(false);
    const [selectItem, setSelectItem] = useState<Option>();
    const selectClass = classNames(styles['base'], disabled ? styles['disabled'] : null);

    const showOptions = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      if (!disabled) setVisble(!visible);
    };

    const concealOptions = () => {
      setVisble(false);
    };

    function handleClick(value: Option): void {
      setSelectItem(value);
      onChange(value);
      setVisble(false);
    }

    return (
      <>
        <button
          {...rest}
          className={selectClass}
          onClick={showOptions}
        >
          <span
            ref={ref}
            className={`${styles['selectDefaultSpan']} ${
              selectItem?.value === undefined && !visible ? '' : styles['up']
            }`}
          >
            {title}
          </span>
          <span className={styles['selectItemSpan']}>{selectItem?.label}</span>
          <svg
            width={15}
            height={15}
            className={`${styles['icon']} ${visible ? styles['rotate'] : ''}`}
          >
            <path
              d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div className={`${styles['options']} ${visible ? styles['show'] : ''}`}>
          {optionsList.map((obj) => {
            return (
              <div
                key={obj.key}
                className={styles['optionItem']}
                onClick={() => handleClick(obj)}
              >
                <span className={styles['optionItemSpan']}>{obj.label}</span>
              </div>
            );
          })}
        </div>
        <div
          className={styles[visible ? 'background' : '']}
          onClick={concealOptions}
        ></div>
      </>
    );
  },
);

Select.displayName = 'Select';
