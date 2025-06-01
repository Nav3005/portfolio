'use client';

import { useState, useEffect } from 'react';

export function MouseGradient() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999] dark:block hidden"
      style={{
        background: `radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.2), transparent)`,
      }}
    />
  );
} 