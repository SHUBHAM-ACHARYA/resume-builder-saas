const PREFIX = 'resume-builder:';

export function getItem<T>(key: string): T | null {
  const raw = localStorage.getItem(PREFIX + key);
  return raw ? (JSON.parse(raw) as T) : null;
}

export function setItem<T>(key: string, value: T): void {
  localStorage.setItem(PREFIX + key, JSON.stringify(value));
}

export function removeItem(key: string): void {
  localStorage.removeItem(PREFIX + key);
}
