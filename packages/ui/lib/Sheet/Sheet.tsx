import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import styles from './Sheet.module.scss';
import { Button } from '..';
// import SheetTrigger from './SheetTrigger';
import { SheetTrigger } from '.';
import { SheetHeader } from '.';

export interface SheetProps {
  /**
   * visible of the sheet
   */
  visible: boolean;
  /**
   * onCancel of the sheet
   */
  onCancel?: () => void;
  /**
   * children of the sheet
   */
  children?: React.ReactNode;
  /**
   * sheetChildren of the sheet
   */
  sheetChildren?: React.ReactNode;
}

export const Sheet = React.forwardRef<HTMLDivElement, SheetProps>(
  ({ visible, onCancel, children, sheetChildren, ...rest }, ref) => {
    const [innerVisible, setInnerVisible] = useState<boolean>(false);
    const [isShowAnimation, setIsShowAnimation] = useState<boolean>(false);
    const [isHideAnimation, setIsHideAnimation] = useState<boolean>(false);

    const test = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
    };

    useEffect(() => {
      if (visible) {
        setInnerVisible(true);
        setIsShowAnimation(true);
        document.body.style.overflow = 'hidden';
        document.body.style.backgroundColor = 'black';
        setTimeout(() => {
          setIsShowAnimation(false);
        }, 400);
      }
      if (!visible) {
        setIsHideAnimation(true);
        setTimeout(() => {
          setIsHideAnimation(false);
          setInnerVisible(false);
          document.body.style.overflow = '';
          document.body.style.backgroundColor = '';
        }, 400);
      }
    }, [visible]);

    const sheetClass = classnames(
      `${styles['base']} 
    ${styles[isShowAnimation ? 'showAnimation' : '']} 
    ${styles[isHideAnimation ? 'hideAnimation' : '']}`,
    );

    return (
      <>
        <div
          className={`${styles['content']}     ${styles[isShowAnimation ? 'showAnimation' : '']} 
            ${styles[isHideAnimation ? 'hideAnimation' : '']}
            ${styles[innerVisible ? 'scale' : '']}`}
        >
          {children}
        </div>
        {innerVisible && (
          <div
            className={sheetClass}
            onClick={onCancel}
            ref={ref}
            {...rest}
          >
            <div
              className={`${styles['sheetContent']} 
            ${styles[isShowAnimation ? 'showAnimation' : '']} 
            ${styles[isHideAnimation ? 'hideAnimation' : '']}`}
              onClick={test}
            >
              {sheetChildren}
            </div>
          </div>
        )}
      </>
    );
  },
);

Sheet.displayName = 'Sheet';
