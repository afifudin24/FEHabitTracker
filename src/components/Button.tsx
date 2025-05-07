import React from 'react';

interface ButtonHrefProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const BtnSuc: React.FC<ButtonHrefProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="px-4 py-2 cursor-pointer bg-[#22C55E] hover:bg-[#16A34A] text-white rounded ">
      {children}
    </button>
  );
};

