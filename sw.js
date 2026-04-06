// 予約帳 Service Worker v6 — 連続施術の区切り改善
// キャッシュなし。常にネットワークから取得。
const CACHE_NAME = 'yoyaku-v21';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
