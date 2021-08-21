const CACHE = 'V1'
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

workbox.routing.registerRoute(
    new RegExp('/*'),
    new workbox.strategies.CacheFirst({
        cacheName: CACHE
    })
);

self.addEventListener('message', (event) => {
    console.log('skip')
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');
  //Remove previous cached data from disk.
  evt.waitUntil(
      caches.keys().then((keyList) => {
          return Promise.all(keyList.map((key) => {
              if (key !== CACHE) {
                  console.log('[ServiceWorker] Removing old cache', key);
                  return caches.delete(key);
                }
          }));
      })
  );
  self.clients.claim();
});
