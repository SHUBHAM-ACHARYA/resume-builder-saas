export function trackEvent(name: string, payload?: Record<string, unknown>) {
  if (import.meta.env.DEV) {
    console.debug('[analytics]', name, payload);
  }
}
