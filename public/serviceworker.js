const CACHE_NAME = "cache-v3";
const filesToCache = [
  "/",
  "./data/data.json",
  "./images/logo.png",
  "./static/js/bundle.js",
  ".manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("opened  cache");
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  // Quand il y a une requête faite sur internet...
  // On répond toujours par nous même
  event.respondWith(
    // On cherche d'abord dans le cache, s'il y a un fichier
    // qui correspond à la requête
    caches.match(event.request).then((matchResponse) => {
      // Si c'est le cas, on le renvoie directement
      if (matchResponse !== undefined) return matchResponse;

      // Si c'est pas le cas, on n'a pas le fichier en cache !
      // On fait une vraie requête...
      return (
        fetch(event.request)
          // Si elle passe, on renvoie le fichier
          .then((fetchResponse) => fetchResponse)
          // Si elle plante, c'est dommage.
          // Peut être qu'il n'y a pas internet ?
          .catch(
            () =>
              new Response(null, {
                status: 501,
                statusText: "Service unavailable",
              })
          )
      );
    })
  );
  console.log("Service Worker: Fetch", event);
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
