export function measure<T>(label: string, fn: () => T): T {
  const start = performance.now();
  const result = fn();
  console.debug(`[perf] ${label}: ${(performance.now() - start).toFixed(2)}ms`);
  return result;
}
