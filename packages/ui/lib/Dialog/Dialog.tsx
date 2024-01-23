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
  /**
   * the cancelContent of the cancel button
   */
  cancelContent?: string;
}

export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      size = 'medium',
      cancel,
      header = <span>header</span>,
      content = (
        <span>
          this is the message <strong></strong>
        </span>
      ),
      footer = (
        <>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'end' }}>
            <Button>enter</Button>
          </div>
        </>
      ),
      visible = true,
      cancelContent = 'Cancel',
      ...rest
    },
    ref,
  ) => {
    const dialogClass = classNames(styles['base'], styles[size], styles[visible ? 'visible' : '']);
    const backgroundClass = classNames(styles['background'], styles[visible ? 'visible' : '']);

    if (visible) {
      document.body.classList.add('stopMove');
    }

    if (!visible) {
      document.body.classList.remove('stopMove');
    }

    return (
      <>
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
              {footer && (
                <div className={styles['footer']}>
                  {footer}
                  <Button
                    color="danger"
                    onClick={cancel}
                  >
                    {cancelContent}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  },
);

Dialog.displayName = 'Dialog';
