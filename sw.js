/* Minimal offline cache for plant Wi-Fi — core shell only */
const CACHE = 's5-mastery-v1';
const CORE = [
  './',
  './index.html',
  './assets/mobile.css',
  './manifest.webmanifest',
  './00_START_HERE.md',
  './ON_THE_JOB/README.md',
  './ON_THE_JOB/Finding_the_Problem_Area.md',
  './ON_THE_JOB/What_to_Check_First.md',
  './_sidebar.md',
  './_navbar.md',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  event.respondWith(
    caches.match(req).then((cached) => {
      const fetched = fetch(req)
        .then((res) => {
          const copy = res.clone();
          if (res.ok && req.url.startsWith(self.location.origin)) {
            caches.open(CACHE).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || fetched;
    })
  );
});
