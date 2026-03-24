const CACHE_NAME = 'domino-house-v2';
const APP_SHELL = [
  './',
  './domino-house-score-v3.html',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames.map(cacheName => {
        if (cacheName !== CACHE_NAME) {
          return caches.delete(cacheName);
        }
        return Promise.resolve();
      })
    );
    await self.clients.claim();
  })());
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') {
    return;
  }

  const requestUrl = new URL(event.request.url);
  const isSameOrigin = requestUrl.origin === self.location.origin;
  const isHtml = event.request.mode === 'navigate' || requestUrl.pathname.endsWith('.html');

  if (!isSameOrigin) {
    return;
  }

  if (isHtml) {
    // Keep the shell fresh while still supporting offline usage.
    event.respondWith((async () => {
      try {
        const networkResponse = await fetch(event.request);
        const cache = await caches.open(CACHE_NAME);
        cache.put(event.request, networkResponse.clone());
        return networkResponse;
      } catch (_) {
        const cachedResponse = await caches.match(event.request);
        return cachedResponse || caches.match('./domino-house-score-v3.html');
      }
    })());
    return;
  }

  // Static assets: return cached immediately and refresh in background.
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(event.request);
    const fetchPromise = fetch(event.request)
      .then(networkResponse => {
        cache.put(event.request, networkResponse.clone());
        return networkResponse;
      })
      .catch(() => cachedResponse);

    return cachedResponse || fetchPromise;
  })());
});
