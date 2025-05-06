"use client";

import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string; // opsional jika ingin menambah styling tambahan
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`w-[90%] md:w-[70%] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
