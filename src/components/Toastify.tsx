'use client';

import { JSX } from 'react';
import { toast } from 'react-toastify';

export const showToast = (message: string | JSX.Element, type: 'success' | 'error' = 'success') => {
  if (type === 'error') {
    toast.error(message, {
      position: 'top-right',
      autoClose: 3000,
    });
  } else {
    toast.success(message, {
      position: 'top-right',
      autoClose: 3000,
    });
  }
};
