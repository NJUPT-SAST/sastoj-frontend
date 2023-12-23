import classNames from 'classnames';
import React from 'react';
import styles from './Dialog.module.scss';
import { Button } from '..';

export interface DialogProps {
  /**
   * The size of the Dialog.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The header of the Dialog.
   */
  header?: React.ReactNode;
  /**
   * The content of the Dialog.
   */
  content?: React.ReactNode;
  /**
   * The footer of the Dialog.
   */
  footer?: React.ReactNode;
  /**
   * the visible of the dialog
   */
  visible?: boolean;
  /**
   * the cancel of the dialog
   */
  cancel?: () => void;
}

export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      size = 'medium',
      cancel,
      header = <span>hello</span>,
      content = (
        <span>
          this is the message <strong></strong>
        </span>
      ),
      footer = (
        <>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'end' }}>
            <Button>enter</Button>
            <Button
              color="danger"
              onClick={cancel}
            >
              cancel
            </Button>
          </div>
        </>
      ),
      visible,
      ...rest
    },
    ref,
  ) => {
    const dialogClass = classNames(styles['base'], styles[size], styles[visible ? 'visible' : '']);
    const backgroundClass = classNames(styles['background'], styles[visible ? 'visible' : '']);

    return (
      <div className={backgroundClass}>
        <div
          ref={ref}
          className={dialogClass}
          {...rest}
        >
          <div className={styles['inner']}>
            <div className={styles['mainContent']}>
              <div className={styles['header']}>
                {header}
                <div
                  className={styles['closeButton']}
                  onClick={cancel}
                ></div>
              </div>
              <div className={styles['content']}>{content}</div>
            </div>
            {footer && <div className={styles['footer']}>{footer}</div>}
          </div>
        </div>
      </div>
    );
  },
);

Dialog.displayName = 'Dialog';
