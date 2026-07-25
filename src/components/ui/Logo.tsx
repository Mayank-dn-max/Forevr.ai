import React from 'react';

export function Logo({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M 4 12 L 8 8 L 16 16 L 20 12 L 16 8 L 8 16" 
        stroke="currentColor" 
        strokeWidth="2.25" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}
