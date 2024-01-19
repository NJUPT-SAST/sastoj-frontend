import React, { useState } from 'react';
import type { RadioProps } from '..';
import classNames from 'classnames';
import styles from './RadioGroup.module.scss';

export interface RadioGroupProps {
  /**
   * the direction of the group
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * the children of the group
   */
  children?: React.ReactNode;
  /**
   * the value of the group
   */
  value: string;
  /**
   * the onchange of the group
   */
  onChange: (value: string) => void;
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ direction = 'vertical', children = <></>, value, onChange, ...rest }, ref) => {
    const [selectedValue, setSelectedValue] = useState<string>(value);

    const handleRadioChange = (value: string) => {
      setSelectedValue(value);
      onChange(value);
    };

    const radioGroupClass = classNames(styles[direction], styles['base']);

    return (
      <div
        {...rest}
        ref={ref}
        className={radioGroupClass}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement<RadioProps>(child)) {
            return React.cloneElement(child, {
              checked: child.props.value === selectedValue,
              onChange: handleRadioChange,
            });
          }
          return child;
        })}
      </div>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';
