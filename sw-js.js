const CACHE = "bulletdrop-v1.4.12";
const SCOPE = self.registration.scope;
const ASSETS = ["./", "./index.html", "./assets/main.js", "./assets/styles.css", "./manifest.json"]
  .map(path => new URL(path, SCOPE).toString());
const INDEX_URL = new URL("./index.html", SCOPE).toString();


self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.hostname.includes("google-analytics") || url.hostname.includes("googletagmanager")) return;
  if (url.hostname.includes("open-meteo.com")) return;

  if (event.request.mode === "navigate") {
    event.respondWith(fetch(event.request).catch(() => caches.match(INDEX_URL)));
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => cached ?? fetch(event.request).then(response => {
      if (response.ok) {
        const clone = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, clone));
      }
      return response;
    }))
  );
});
