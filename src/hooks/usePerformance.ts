import { useEffect, useRef } from 'react';

export function usePerformance(label: string) {
  const start = useRef(performance.now());

  useEffect(() => {
    const elapsed = performance.now() - start.current;
    console.debug(`[perf] ${label}: ${elapsed.toFixed(2)}ms`);
  }, [label]);
}
