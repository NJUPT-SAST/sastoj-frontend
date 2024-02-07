import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import styles from './Switch.module.scss';

export interface SwitchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * size, the size of the Switch
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * checked ,the checked of the switch
   */
  checked?: boolean;
  /**
   * defaultChecked ,the defaultChecked of the switch
   */
  defaultChecked?: boolean;
  /**
   * onChange, the onChange of the switch
   */
  onchange?: (value: boolean) => void;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ size = 'medium', checked = false, defaultChecked = false, onchange }, ref) => {
    const [isChecked, setIsChecked] = useState<boolean | undefined>(defaultChecked);
    const switchClass = classNames(
      `${styles['base']} ${isChecked ? styles['isChecked'] : ''} ${styles[size]}`,
    );

    useEffect(() => {
      setIsChecked(checked);
    }, [checked]);

    useEffect(() => {
      onchange && isChecked !== undefined && onchange(isChecked);
    }, [isChecked, onchange]);
    return (
      <>
        <div style={{ position: 'relative' }}>
          <button
            className={switchClass}
            onClick={() => setIsChecked(!isChecked)}
            ref={ref}
          />
        </div>
      </>
    );
  },
);

Switch.displayName = 'Switch';
