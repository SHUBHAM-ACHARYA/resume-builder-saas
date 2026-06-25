import { useEffect } from 'react';

export function useAccessibility(ref: React.RefObject<HTMLElement>, label: string) {
  useEffect(() => {
    if (ref.current) {
      ref.current.setAttribute('aria-label', label);
    }
  }, [ref, label]);
}
