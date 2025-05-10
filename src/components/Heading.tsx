import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ children, className = '' }: HeadingProps) => (
  <h1 className={`font-bold text-5xl text-text-primary mb-5 ${className}`}>{children}</h1>
);

export const H2 = ({ children, className = '' }: HeadingProps) => (
  <h2 className={`text-3xl  font-semibold text-text-primary ${className}`}>{children}</h2>
);

export const H3 = ({ children, className = '' }: HeadingProps) => (
  <h3 className={`text-2xl mb-5 font-semibold text-text-primary ${className}`}>{children}</h3>
);
