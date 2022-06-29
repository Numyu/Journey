const CACHE_NAME = "cache-v8";
const filesToCache = [
  "/",
  "/images/logo.png",
  "/manifest.json",
  "/images/ArtisanCardIcones/trash.svg",
  "/images/ArtisanCardImg/fromages-ramage.png",
  "/images/ArtisanCardImg/au-virage-lepic.png",
  "/images/ArtisanCardImg/maison-georges-larnicol.png",
  "/images/ArtisanCardImg/du-vert-au-vin.png",
  "/images/ArtisanCardImg/la-butte-fromagere.png",
  "/images/ArtisanCardImg/pain-pain.png",
  "/images/ArtisanCardImg/le-poulbot.png",
  "/images/ArtisanCardImg/ame-et-esprit-du-vin.png",
  "/images/ArtisanCardImg/patisserie-gilles-marchal.png",
  "/images/ArtisanCardImg/la-cremaillere-1900.png",
  "/images/ArtisanCardImg/chez-virginie-caulaincourt.png",
  "/images/ArtisanCardImg/le-vin-au-vert.png",
  "/images/ArtisanCardImg/jo.png",
  "/images/ArtisanCardImg/le-slip-francais.png",
  "/images/ArtisanCardImg/nina-kendosa.png",
  "/images/ArtisanCardImg/telle-mere-telle-fille.png",
  "/images/ArtisanCardImg/anoki.png",
  "/images/ArtisanCardImg/sandro-homme.png",
  "/images/ArtisanCardImg/maje.png",
  "/images/ArtisanCardImg/atelier-de-famille.png",
  "/images/ArtisanCardImg/apc-surplus.png",
  "/images/ArtisanCardImg/musee-de-montmarte.png",
  "/images/ArtisanCardImg/halle-saint-pierre.png",
  "/images/ArtisanCardImg/maison-de-dalida.png",
  "/images/ArtisanCardImg/square-louise-michel.png",
  "/images/ArtisanCardImg/librairie-des-abbesses.png",
  "/images/ArtisanCardImg/square-marcel-bleustein-blanchet.png",
  "/images/ArtisanCardImg/square-nadar.png",
  "/images/ArtisanCardImg/le-mur-des-je-t-aime.png",
  "/images/ArtisanCardImg/place-du-tertre.png",
  "/images/ArtisanCardImg/arene-de-montmartre.png",
  "/images/ArtisanCardImg/le-bio-de-la-butte.png",
  "/images/ArtisanCardImg/the-bon-the-bio.png",
  "/images/ArtisanCardImg/la-rhumerie-parisienne.png",
  "/images/ArtisanCardImg/au-bout-du-champ.png",
  "/images/ArtisanCardImg/oh-my-cream.png",
  "/images/ArtisanCardImg/yves-rocher.png",
  "/images/ArtisanCardImg/au-bout-des-doigts.png",
  "/images/ImagesFilter/culture.svg",
  "/images/ImagesFilter/food-drinks.svg",
  "/images/ImagesFilter/mode.svg",
  "/images/ImagesFilter/self-care.svg",
  "/images/ItineraryImage/culture-haussman.png",
  "/images/ItineraryImage/culture-lenotre.png",
  "/images/ItineraryImage/culture-vangogh.png",
  "/images/ItineraryImage/f&d-epicurian.png",
  "/images/ItineraryImage/f&d-gourmet.png",
  "/images/ItineraryImage/f&d-signature.png",
  "/images/ItineraryImage/global-discovery.png",
  "/images/ItineraryImage/global-grandtour.png",
  "/images/ItineraryImage/global-parislover.png",
  "/images/ItineraryImage/mode-cocochanel.png",
  "/images/ItineraryImage/mode-jeanpaulgaultier.png",
  "/images/ItineraryImage/mode-yvessaintlaurent.png",
  "/images/ItineraryImage/selfcare-bio.png",
  "/images/ItineraryImage/selfcare-icare.png",
  "/images/MostViewedImg/eiffel.png",
  "/images/MostViewedImg/louvre-museum.png",
  "/images/MostViewedImg/sacre-coeur-basilica.png",
  "/images/MostViewedImg/triumph-arch.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("opened  cache");
      return cache.addAll(filesToCache).catch((err) => console.log(err));
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((matchResponse) => {
      if (matchResponse !== undefined) return matchResponse;
      return fetch(event.request)
        .then((fetchResponse) => fetchResponse)
        .catch(
          () =>
            new Response(null, {
              status: 501,
              statusText: "Service unavailable",
            })
        );
    })
  );
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
