import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import styles from './Sheet.module.scss';
// import SheetTrigger from './SheetTrigger';
import { SheetHeader } from './SheetHeader';
import { SheetFooter } from './SheetFooter';

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
   * header of the sheet
   */
  sheetTitle?: string;
  /**
   * footer of the sheet
   */
  sheetFooter?: React.ReactNode;
  /**
   * children of the sheet
   */
  children?: React.ReactNode;
}

export const Sheet = React.forwardRef<HTMLDivElement, SheetProps>(
  ({ visible, onCancel, sheetTitle, sheetFooter, children, ...rest }, ref) => {
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
        setTimeout(() => {
          setIsHideAnimation(false);
          setInnerVisible(false);
          document.body.style.overflow = '';
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
        {innerVisible && (
          <div
            className={sheetClass}
            onMouseDown={onCancel}
            ref={ref}
            {...rest}
          >
            <div
              className={`${styles['sheetContent']} 
            ${styles[isShowAnimation ? 'showAnimation' : '']} 
            ${styles[isHideAnimation ? 'hideAnimation' : '']}`}
              onMouseDown={test}
            >
              <SheetHeader
                onCancel={onCancel}
                content={sheetTitle}
              ></SheetHeader>
              <div className={styles['sheetMainContent']}>{children}</div>
              <SheetFooter>{sheetFooter}</SheetFooter>
            </div>
          </div>
        )}
      </>
    );
  },
);

Sheet.displayName = 'Sheet';
