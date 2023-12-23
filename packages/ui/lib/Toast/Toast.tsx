import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './Toast.module.scss';

export interface ToastProps {
  /**
   * The type of the Toast.
   */
  type?: 'info' | 'success' | 'warning' | 'error';
  /**
   * The size of the Toast.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The content of the Toast.
   */
  content?: React.ReactNode;
  /**
   * The footer of the Toast.
   */
  footer?: React.ReactNode;
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      type = 'info',
      size = 'medium',
      content = (
        <span>
          this is the message <strong>{type}</strong>
        </span>
      ),
      footer = null,
      ...rest
    },
    ref,
  ) => {
    const [visible, setVisble] = useState(true);

    const toastClass = classNames(
      styles['base'],
      styles[type],
      styles[size],
      styles[visible ? 'visible' : ''],
    );

    return (
      <div
        ref={ref}
        className={toastClass}
        {...rest}
      >
        <div className={styles['inner']}>
          <div className={styles['mainContent']}>
            <div className={styles['header']}>
              <div>{type}</div>
              <div
                className={styles['closeButton']}
                onClick={() => setVisble(false)}
              >
                <svg
                  className={styles['icon']}
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                >
                  <path d="M512 128C300.8 128 128 300.8 128 512s172.8 384 384 384 384-172.8 384-384S723.2 128 512 128zM672 627.2c12.8 12.8 12.8 32 0 44.8s-32 12.8-44.8 0L512 556.8l-115.2 115.2c-12.8 12.8-32 12.8-44.8 0s-12.8-32 0-44.8L467.2 512 352 396.8C339.2 384 339.2 364.8 352 352s32-12.8 44.8 0L512 467.2l115.2-115.2c12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8L556.8 512 672 627.2z"></path>
                </svg>
              </div>
            </div>
            <div className={styles['content']}>{content}</div>
          </div>
          {footer && <div className={styles['footer']}>{footer}</div>}
        </div>
      </div>
    );
  },
);

Toast.displayName = 'Toast';
