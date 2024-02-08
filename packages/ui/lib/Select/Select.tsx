import React, { useState, type MouseEventHandler, useEffect } from 'react';
import styles from './Select.module.scss';
import { Input } from '..';

export interface OptionProps {
  value: string;
  label: string;
  key: number;
}

export interface SelectProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  /**
   * onChange of the select
   */
  onchange: (value: OptionProps) => void;
  /**
   * the optionList of the select
   */
  optionsList?: Array<OptionProps>;
  /**
   * the title of the select
   */
  title?: string;
  /**
   * diabled of the select
   */
  disabled?: boolean;
  /**
   * defaultselectKey ,the defaultselectkey of the options
   */
  defaultSelectKey?: number;
  /**
   * selectKey, the selectKey of the options
   */
  selectKey?: number;
}

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      optionsList = [
        { value: 'nextjs', label: 'nextjs', key: 3 },
        { value: 'nuxtjs', label: 'nuxtjs', key: 5 },
      ],
      onchange,
      title = 'which framwork?',
      disabled = false,
      defaultSelectKey,
      selectKey,
      ...rest
    },
    ref,
  ) => {
    const [visible, setVisble] = useState<boolean>(false);
    const [selectItem, setSelectItem] = useState<OptionProps | undefined>(
      optionsList.find((item) => item.key === defaultSelectKey),
    );
    const [options, setOptions] = useState<OptionProps[]>(optionsList);
    const [inputValue, setInputValue] = useState<string>('');

    const showOptions: MouseEventHandler = () => {
      if (!disabled) setVisble(!visible);
    };

    useEffect(() => {
      setSelectItem(optionsList.find((item) => item.key === selectKey));
    }, [selectKey, optionsList]);

    function handleClick(value: OptionProps): void {
      setSelectItem(value);
      setInputValue(value.label);
    }

    useEffect(() => {
      selectItem && onchange(selectItem);
      selectItem?.value && setInputValue(selectItem?.value);
    }, [selectItem, onchange]);

    const handleOptions = (value: string) => {
      if (value === '') {
        setSelectItem(undefined);
      }
      setInputValue(value);
    };

    function fuzzySearch(optionsList: OptionProps[], searchTerm: string): OptionProps[] {
      const regex = new RegExp(searchTerm, 'i');
      return optionsList.filter((option) => regex.test(option.label));
    }

    const closeOptions = () => {
      setTimeout(() => {
        setVisble(false);
      }, 100);
    };

    useEffect(() => {
      const results = fuzzySearch(optionsList, inputValue);
      setOptions(results);
    }, [inputValue, optionsList]);
    return (
      <>
        <div
          ref={ref}
          {...rest}
        >
          <Input
            onClick={showOptions}
            value={inputValue}
            onBlur={closeOptions}
            width={280}
            onchange={handleOptions}
            label={title}
          ></Input>
          <div className={`${styles['options']} ${visible ? styles['show'] : ''}`}>
            {!options.length ? (
              <div className={styles['nothing-img-container']}>
                <img src="../../public/sast_test_image/404.png" />
                <span style={{ fontWeight: '700' }}>什么都没有检索到哦😭</span>
              </div>
            ) : (
              options.map((obj) => {
                return (
                  <div
                    key={obj.key}
                    className={styles['option-item']}
                    onClick={() => handleClick(obj)}
                  >
                    <span className={styles['option-item-span']}>{obj.label}</span>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </>
    );
  },
);

Select.displayName = 'Select';
