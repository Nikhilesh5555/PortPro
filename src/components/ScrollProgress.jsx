import React, { useEffect, useRef } from 'react';
const ScrollProgress = () => {
  const ref = useRef(null);
  useEffect(() => {
    const bar = ref.current;
    const onScroll = () => {
      const d = document.documentElement;
      const pct = (d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100;
      if (bar) bar.style.width = `${Math.min(pct, 100)}%`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div id="scroll-progress" ref={ref} />;
};
export default ScrollProgress;
