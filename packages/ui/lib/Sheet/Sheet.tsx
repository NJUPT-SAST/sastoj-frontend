import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import styles from './Sheet.module.scss';
import { Button } from '..';
// import SheetTrigger from './SheetTrigger';
import { SheetTrigger } from '.';

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
}

export const Sheet = React.forwardRef<HTMLDivElement, SheetProps>(
  ({ visible, onCancel, ...rest }, ref) => {
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
        setTimeout(() => {
          setIsShowAnimation(false);
        }, 400);
      }
      if (!visible) {
        setIsHideAnimation(true);
        document.body.style.overflow = '';
        setTimeout(() => {
          setIsHideAnimation(false);
          setInnerVisible(false);
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
        <div>
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
              content
              <Button>content</Button>
            </div>
          </div>
        )}
      </>
    );
  },
);

Sheet.displayName = 'Sheet';
