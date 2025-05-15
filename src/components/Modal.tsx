import React from 'react';
import { useState, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footerButtons?: React.ReactNode; // ✅ custom tombol
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footerButtons }) => {
//   if (!isOpen) return null;
const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      // Delay agar sempat animasi keluar dulu
      const timeout = setTimeout(() => setShow(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!isOpen && !show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center 
      transition-opacity duration-200 
      ${isOpen ? 'opacity-100' : 'opacity-0'} 
      bg-black/40 backdrop-blur-sm`}
    >
    <div
      className={`bg-bg-card rounded-lg shadow-lg w-full max-w-md mx-4 transform transition-all duration-300 ${
        isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-text-primary">{title}</h2>
        <button
          className="text-text-primary hover:text-text-secondary  text-xl"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
      <div
  className={`p-4 transform transition-all duration-300 ease-in-out
    ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
  `}
>
  {children}
</div>
      <div className="p-4 border-t   border-gray-200 dark:border-gray-700 flex justify-end gap-2">
      {footerButtons && footerButtons}
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  </div>
  );
};

export default Modal;
