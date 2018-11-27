//Asingnar Nombre y Version de la Cache
const CACHE_NAME ='v1_cache_juancito_pena_pwa';
//Ficheros a Cachear en la Aplicacion
var urlsToCache =[
  './',
  '.main.js',
  '.manifest.json',
  './css/styles.css',
  './javascript/scripts.js',
  './img/fondo1.jpg',
  './img/logo1.png',
  './img/user.png',
  './img/1.png',
  './img/2.png',
  './img/3.png',
  './img/4.png',
  './img/5.png',
  './img/6.png',
  './img/portafolio1.png',
  './img/club_nautico.jpg',
  './img/mini-youtube.jpg',
  './img/Reproductor.jpg',
  './img/pptijera1.png',
  './img/ppt.png',
  './img/PDC.png',
  './img/mini-youtube.png',
  './img/mini-youtube-.png',
  './img/reproductor_multimedia.png',
  './img/RSC.png',
  './img/RSJPV.png',
  './img/punto-venta.png',
  './img/SolucionesJPV.png',
  './img/3rayas.png',
  './img/facebook.png',
  './img/blogger.png',
  './img/blogger-.png',
  './img/Github.png',
  './img/youtube.png',
  './img/youtube1.png',
  './img/blogger.png',
  './img/Instagram.png',
  './img/linkedin.png',
  './img/google-plus.png',
  './img/whatsapp.png',
  './img/idiomas.png',
  './img/espanol.png',
  './img/Ingles.png',
  './img/france.png',
  './img/framework.png',
  './img/easysales.png',
  './img/curos-virtuales.png',
  ',/img/club_nautico1.png',
  './img/Code-icono.png',
  './img/github.png',
  './img/HTML5.png',
  './img/db-code.png',
  './img/Code-icono.png',
  './img/CV.png',
  './img/PDC.png',
  './img/NOVALOGIQ.png',
  './img/portafolio1.png',
  './img/framework.png',
  './img/favicon-1024.png',
  './img/favicon-512.png',
  './img/favicon-384.png',
  './img/favicon-256.png',
  './img/favicon-192.png',
  './img/favicon-128.png',
  './img/favicon-96.png',
  './img/favicon-64.png',
  './img/favicon-32.png',
  './img/favicon-16.png'
];


//Evento Install
//Instalacion del service Worker y guardar en cache los recursos estativos
self.addEventListener('install', e => {
   e.waitUntil(
      caches.open(CACHE_NAME)
            .then(cache => {
              return cache.addAll(urlsToCache)
                          .then(() => {
                            self.skipWaiting();
                          });
             })
            .catch(err => console.log('No se ha regstrado el Cache', err))

  );
});

//Evento active
//Hace que la App funcione sin conexiones.
self.addEventListener('activa', e =>{
    const cacheWhitelist=[CACHE_NAME];

    e.waitUntil(
      caches.keys()
            .then(cacheNames => {
              return Promise.all(
                cacheNames.map(cacheName => {

                  if(cacheWhitelist.indexOf(cacheName) === -1){
                    //Borrar los elementos que no necesitamos
                    return cache.delete(cacheName);
                  }

                })
              );
            })
            .then(() => {
              //activa la cache en el dispositivos
              selt.clients.claim();
            })
    );
});


//Evento fetch
self.addEventListener('fetch', e => {

    e.respondWith(
      caches.match(e.request)
            .then(res => {
              if(res) {
                //me devuelve los datos de la cache
                return res;
              }

                return fetch(e.request);
            })

    );

});
