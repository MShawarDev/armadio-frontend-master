import {toast, ToastOptions} from 'react-toastify';

/**
 * This callback type is called `toastify` and is displayed toast inside app.
 *
 * @callback toastify
 * @param {string} text need to show inside you toast body
 * @param {string} type you have four type 'warn' | 'error' | 'success' | 'info'
 * @param {ToastOptions} rest
 * @return {toast view}
 *
 */

export const toastify = (
  text: string,
  type: 'warn' | 'error' | 'success' | 'info',
  autoClose?: number,
  rest?: ToastOptions,
  onClick?: () => void,
  delay?: number,
  draggable?: boolean,
) => {
  toast[type](text, {
    autoClose: autoClose,
    onClick: onClick,
    delay: delay,
    draggable: draggable,
    ...rest,
  });
};
