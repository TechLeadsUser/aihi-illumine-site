import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options;
  
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isVisible };
};

// Animation component wrapper
interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'slide-left' | 'slide-right' | 'scale-in' | 'fade-in';
  delay?: number;
  className?: string;
}

export const ScrollAnimation = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className = ''
}: ScrollAnimationProps) => {
  const { elementRef, isVisible } = useScrollAnimation();

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0 translate-y-8';
    
    switch (animation) {
      case 'fade-up':
        return 'opacity-100 translate-y-0';
      case 'fade-down':
        return 'opacity-100 -translate-y-0';
      case 'slide-left':
        return 'opacity-100 translate-x-0';
      case 'slide-right':
        return 'opacity-100 -translate-x-0';
      case 'scale-in':
        return 'opacity-100 scale-100';
      case 'fade-in':
        return 'opacity-100';
      default:
        return 'opacity-100 translate-y-0';
    }
  };

  const getInitialClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'opacity-0 translate-y-8';
      case 'fade-down':
        return 'opacity-0 -translate-y-8';
      case 'slide-left':
        return 'opacity-0 -translate-x-8';
      case 'slide-right':
        return 'opacity-0 translate-x-8';
      case 'scale-in':
        return 'opacity-0 scale-95';
      case 'fade-in':
        return 'opacity-0';
      default:
        return 'opacity-0 translate-y-8';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${isVisible ? getAnimationClass() : getInitialClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};