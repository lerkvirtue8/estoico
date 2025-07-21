import React from 'react';

export function Card({ children, className = '' }) {
  return (
    <div className={`
      bg-gradient-to-br from-[#1c1c1c] to-[#0c0c0c]
      rounded-xl border border-gray-800
      shadow-2xl hover:shadow-3xl
      transform hover:-translate-y-1 transition-all duration-300 ease-in-out
      overflow-hidden
      ${className}
    `}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
}
