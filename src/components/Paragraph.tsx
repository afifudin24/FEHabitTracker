import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export  const P1 = ({ children, className = '' }: ParagraphProps) => {
    return (
        <p className={`text-[14px] ${className}`}>{children}</p>
    )

}