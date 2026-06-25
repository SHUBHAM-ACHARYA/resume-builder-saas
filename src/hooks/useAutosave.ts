import { useEffect } from 'react';

export function useAutosave<T>(data: T, onSave: (data: T) => void, delay = 1000) {
  useEffect(() => {
    const handle = setTimeout(() => onSave(data), delay);
    return () => clearTimeout(handle);
  }, [data, onSave, delay]);
}
