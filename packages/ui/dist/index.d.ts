import { default as React_2 } from 'react';

export declare const Button: React_2.ForwardRefExoticComponent<
  ButtonProps & React_2.RefAttributes<HTMLButtonElement>
>;

export declare interface ButtonProps extends React_2.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The color of the button.
   */
  color?: 'primary' | 'success' | 'info' | 'warning' | 'error';
  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
}

export {};
