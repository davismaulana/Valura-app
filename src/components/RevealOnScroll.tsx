import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in ms
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ 
  children, 
  className = "", 
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before the bottom
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
        isVisible 
          ? "opacity-100 translate-y-0 scale-100 blur-0 rotate-0" 
          : "opacity-0 translate-y-16 scale-95 blur-[2px] -rotate-1"
      } ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {children}
    </div>
  );
};
