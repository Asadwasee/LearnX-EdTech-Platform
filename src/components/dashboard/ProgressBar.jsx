import React, { useEffect, useState, useRef } from 'react';

export default function ProgressBar({ value = 0, className = '' }) {
  const [rendered, setRendered] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    // animate width via CSS transition; also animate numeric counter
    const node = ref.current;
    if (!node) return;

    // force starting at 0
    setRendered(0);

    // allow a tick for CSS to apply
    const t = setTimeout(() => {
      setRendered(value);
    }, 50);

    return () => clearTimeout(t);
  }, [value]);

  // numeric counter animation
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let raf;
    const start = performance.now();
    const duration = 900;
    const from = 0;
    const to = value;
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const cur = Math.round(from + (to - from) * t);
      setDisplay(cur);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between text-xs font-medium mb-2">
        <div className="text-text-dark">Progress</div>
        <div className="text-text-muted">{display}%</div>
      </div>
      <div className="w-full h-3 bg-secondary-gray-dark rounded-full overflow-hidden">
        <div
          ref={ref}
          className="h-full bg-primary-green rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${rendered}%` }}
        />
      </div>
    </div>
  );
}
