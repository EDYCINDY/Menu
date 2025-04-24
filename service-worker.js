self.addEventListener('install', function (event) {
  console.log('[ServiceWorker] Install');
  event.waitUntil(
    caches.open('menu-cache-v1').then(function (cache) {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        'https://github.com/EDYCINDY/Menu/blob/main/my.jpg?raw=true'
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
