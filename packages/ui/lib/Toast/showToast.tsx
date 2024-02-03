import { createRoot } from 'react-dom/client';
import { Toast, type ToastProps } from '.';

import classNames from 'classnames';
import styles from './Toast.module.scss';

let toasts: HTMLDivElement[] = [];
let toastContainer: HTMLDivElement | null = null;

const state = { slideToasts: null };

export const showToast = (props?: ToastProps) => {
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

  const root = createRoot(div);

  const close = () => {
    div.remove();
    toasts = toasts.filter((toast) => toast !== div);
    state.slideToasts = toasts; // 更新 slideToasts 的值
    expandSlide(state.slideToasts, div);
  };

  root.render(
    <Toast
      {...props}
      close={close}
    ></Toast>,
  );

  toasts.push(div);
  state.slideToasts = toasts; // 更新 slideToasts 的值

  slide(state.slideToasts, div);

  if (toasts.length > 3) {
    toasts.shift();
    const firstChild = toastContainer.childNodes[0];
    setTimeout(() => {
      while (toastContainer.childNodes.length > 3) {
        toastContainer.removeChild(toastContainer.firstChild!);
      }
    }, 300);
  }

  setTimeout(() => {
    const ToasthideClass: string = classNames(styles['toastHide']);
    div.className = ToasthideClass;

    setTimeout(() => {
      // Only remove the toast if the mouse is not over it
      toastContainer?.removeChild(div);
      toasts = toasts.filter((toast) => toast !== div);
      state.slideToasts = toasts;
    }, 280);
  }, 4000);
};

const expand = (expandToasts: any) => {
  expandToasts.forEach((toast: HTMLDivElement, index: number) => {
    const totalHeight = expandToasts
      .slice(0, expandToasts.length - index - 1)
      .reduce((height: any, toast: any) => height + toast.offsetHeight, 0);
    toast.style.transform = `translateY(-${totalHeight}px)`;
  });
};

const hide = (hideToasts: any) => {
  hideToasts.forEach((toast: HTMLDivElement, index: number) => {
    toast.style.transform = `translateY(-${(hideToasts.length - index - 1) * 15}px) scale(${
      0.95 ** (hideToasts.length - index - 1)
    })`;
  });
};

const slide = (slideToasts: any, div: any) => {
  state.slideToasts = slideToasts;

  const handleMouseEnter = () => {
    expand(state.slideToasts);
  };

  const handleMouseLeave = () => {
    hide(state.slideToasts);
  };

  state.slideToasts.forEach((toast: HTMLDivElement, index: number) => {
    toast.style.transform = `translateY(-${(toasts.length - index - 1) * 15}px) scale(${
      0.95 ** (toasts.length - index - 1)
    })`;

    if (state.slideToasts.length - index === 4) {
      toast.style.opacity = '0';
    }

    div.addEventListener('mouseenter', handleMouseEnter);
    div.addEventListener('mouseleave', handleMouseLeave);
  });
};

const expandSlide = (slideToasts: any, div: any) => {
  state.slideToasts = slideToasts;

  const handleMouseEnter = () => {
    expand(state.slideToasts);
  };

  const handleMouseLeave = () => {
    hide(state.slideToasts);
  };

  state.slideToasts.forEach((toast: HTMLDivElement, index: number) => {
    const totalHeight = state.slideToasts
      .slice(0, state.slideToasts.length - index - 1)
      .reduce((height: any, toast: any) => height + toast.offsetHeight, 0);
    toast.style.transform = `translateY(-${totalHeight}px)`;

    div.addEventListener('mouseenter', handleMouseEnter);
    div.addEventListener('mouseleave', handleMouseLeave);
  });
};
