import React, { useEffect, useState } from 'react';
import type { RadioProps } from '..';
import classNames from 'classnames';
import styles from './RadioGroup.module.scss';
import { Radio } from '../Radio/Radio';

export interface RadioGroupProps {
  /**
   * the direction of the group
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * the defaultvalue of the group,if you use multipe ,the defaultValue must be an array
   */
  defaultValue?: string | string[] | null;
  /**
   * the onchange of the group
   */
  onChange: (value: string | string[]) => void;
  /**
   * the isMultipe of the radioGroup
   */
  isMultipe?: boolean;
  /**
   * the options of the radioGroup
   */
  options: RadioProps[];
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      direction = 'vertical',
      defaultValue = 'nodejs',
      onChange,
      isMultipe = true,
      options = [
        { children: 'nodejs', value: 'nodejs' },
        { children: 'vuejs', value: 'vuejs' },
        { children: 'react', value: 'react' },
      ],
      ...rest
    },
    ref,
  ) => {
    const [selectedValue, setSelectedValue] = useState<string | string[]>(defaultValue || '' || []);
    const handleRadioChange = (_: 'add' | 'cancel', value: string) => {
      setSelectedValue(value);
    };

    const addRadio = (value: string) => {
      setSelectedValue([...selectedValue, value]);
    };

    const deleteRadio = (value: string) => {
      if (Array.isArray(selectedValue))
        setSelectedValue(selectedValue.filter((item) => item !== value));
    };

    const handleMultipeRadioChange = (type: 'cancel' | 'add', value: string) => {
      if (type === 'cancel') deleteRadio(value);
      if (type === 'add') addRadio(value);
    };

    const radioGroupClass = classNames(styles[direction], styles['base']);

    useEffect(() => {
      onChange(selectedValue);
    }, [selectedValue, onChange]);

    return (
      <div
        {...rest}
        ref={ref}
        className={radioGroupClass}
      >
        {options.map((item, index) => {
          return (
            <Radio
              key={index}
              value={item.value}
              onChange={isMultipe ? handleMultipeRadioChange : handleRadioChange}
              isCanCancel={isMultipe}
              checked={
                isMultipe ? selectedValue.includes(`${item.value}`) : selectedValue === item.value
              }
            >
              {item.children}
            </Radio>
          );
        })}
      </div>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';
