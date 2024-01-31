import { createRoot } from 'react-dom/client';
import { Toast } from '.';
import classNames from 'classnames';
import styles from './Toast.module.scss';

let toasts: HTMLDivElement[] = [];
let toastContainer: HTMLDivElement | null = null;

export const showToast = (): void => {
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    document.body.appendChild(toastContainer);
  }

  const div: HTMLDivElement = document.createElement('div');
  toastContainer.appendChild(div);
  const containerClass = classNames(styles['container']);
  toastContainer.className = containerClass;

  const ToastClass: string = classNames(styles['toastShow']);
  div.className = ToastClass;

  console.log('length', toasts.length, 'container', toasts);

  const root = createRoot(div);

  root.render(<Toast></Toast>);

  toasts.push(div);

  // Update the position of existing toasts
  toasts.forEach((toast: HTMLDivElement, index: number) => {
    toast.style.transform = `translateY(-${(toasts.length - index - 1) * 15}px) scale(${
      0.95 ** (toasts.length - index - 1)
    })`;

    div.addEventListener('mouseenter', () => {
      // div.classList.add(dataExpandClass);
      console.log('show');
      expand(toasts);
    });
    div.addEventListener('mouseleave', () => {
      // div.classList.add(dataExpandClass);
      console.log('hide');
      hide(toasts);
    });
  });

  setTimeout(() => {
    const ToastContainerClass: string = classNames(styles['toastHide']);
    div.className = ToastContainerClass;

    setTimeout(() => {
      // Only remove the toast if the mouse is not over it
      toastContainer?.removeChild(div);
      toasts = toasts.filter((toast) => toast !== div);
    }, 280);
  }, 4000);
};

const expand = (toasts: any) => {
  toasts.forEach((toast: HTMLDivElement, index: number) => {
    // Calculate the total height of all previous toasts
    const totalHeight = toasts
      .slice(0, toasts.length - index - 1)
      .reduce((height, toast) => height + toast.offsetHeight, 0);
    console.log('totalHeight', totalHeight);
    // Move the toast up by the total height of all previous toasts
    toast.style.transform = `translateY(-${totalHeight}px)`;
  });
};

const hide = (toasts: any) => {
  toasts.forEach((toast: HTMLDivElement, index: number) => {
    toast.style.transform = `translateY(-${(toasts.length - index - 1) * 15}px) scale(${
      0.95 ** (toasts.length - index - 1)
    })`;
  });
};
