import React from 'react';
import styles from './Card.module.scss';
import classnames from 'classnames';

export interface CardProps {
  /**
   * The theme of the Card
   */
  theme?: 'dark' | 'light';

  /**
   * The size of the Card.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The Header of the Card.
   */
  header?: React.ReactNode;
  /**
   * The content of the Card.
   */
  content?: React.ReactNode;
  /**
   * The footer of the Card.
   */
  footer?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      theme = 'light',
      size = 'medium',
      header = <span>header</span>,
      content = <span>content</span>,
      footer = <span>footer</span>,
      ...rest
    },
    ref,
  ) => {
    const cardClass = classnames(styles['base'], styles[theme], styles[size]);
    return (
      <div
        ref={ref}
        className={cardClass}
        {...rest}
      >
        <div className={styles['mainContent']}>
          <div className={styles['header']}>{header}</div>
          <div className={styles['content']}>{content}</div>
        </div>
        <div className={styles['footer']}>{footer}</div>
      </div>
    );
  },
);

Card.displayName = 'Card';
