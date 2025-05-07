"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string; // opsional jika ingin menambah styling tambahan
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-bg-card rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] ${className}`}>
      {children}
    </div>
  );
};

export default Card;
