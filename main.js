// Service Worker

if('serviceWorker' in navigator){
  console.log('Pruedes Usar los serviceWorker en tu navegador');

  navigator.serviceWorker.register('./sw.js')
                        .then(res => console.log('serviceWorker Cargado Correctamente', res))
                        .catch(err => console.log('serviceWorker no se ha podido registrar',err));
}
else{
  console.log('No Pruedes Usar los serviceWorker en tu navegador');
}


// Scroll Suavisado

$(document).ready(function(){

  $("#menu a").click(function(e){
    e.preventDefault();

    $("html, body").animate({
      scrollTop: $($(this).attr('href')).offset().top
    });

    return false;

  });
});
