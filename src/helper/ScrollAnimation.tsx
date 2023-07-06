import React, { useEffect, useRef } from 'react';

type ScrollAnimationProps = {
  children: React.ReactNode;
};

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onEntry = (entry: IntersectionObserverEntry[]) => {
      entry.forEach((change) => {
        if (change.isIntersecting) {
          change.target.classList.add('element-show');
        }
      });
    };

    const options = {
      threshold: [0.1],
    };
    const observer = new IntersectionObserver(onEntry, options);

    const currentRef = ref.current; 

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); 

  return (
    <div ref={ref} className="scroll-animation element-animation">
      {children}
    </div>
  );
};

export default ScrollAnimation;
