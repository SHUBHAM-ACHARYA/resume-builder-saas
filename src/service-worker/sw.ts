/// <reference lib="webworker" />

const CACHE_NAME = 'resume-builder-cache-v1';

self.addEventListener('install', (event) => {
  console.log('Service worker installed');
});

self.addEventListener('fetch', (event: any) => {
  // Pass-through fetch; extend with caching strategy as needed.
});

export {};
