// Service Worker for font caching and offline support
const CACHE_NAME = 'sametdulger-v1';
const FONT_CACHE_NAME = 'fonts-v1';

// Cache fonts and critical assets
const FONTS_TO_CACHE = [
  '/_next/static/media/',
];

const CRITICAL_ASSETS = [
  '/',
  '/manifest.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(CRITICAL_ASSETS).catch(err => {
          console.warn('Cache addAll failed:', err);
        });
      }),
      caches.open(FONT_CACHE_NAME)
    ])
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== FONT_CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle font requests with aggressive caching
  if (request.destination === 'font' || url.pathname.includes('.woff2') || url.pathname.includes('.woff')) {
    event.respondWith(
      caches.open(FONT_CACHE_NAME).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          return fetch(request).then((response) => {
            // Only cache successful font responses
            if (response.status === 200) {
              cache.put(request, response.clone());
            }
            return response;
          }).catch(() => {
            // Return a basic response if font fails to load
            return new Response('', {
              status: 204,
              statusText: 'Font not available'
            });
          });
        });
      })
    );
    return;
  }

  // Handle other requests with network-first strategy
  if (url.origin === location.origin) {
    event.respondWith(
      fetch(request).catch(() => {
        return caches.match(request);
      })
    );
  }
}); 