/*  Contenedor de las tarjetas Variables y el Fetch para acceder a la informacion
    Situada en el Json datos_tarjetas_areas
*/
const indexDatos = document.querySelector(".contenedor_tarjetas_distritos");
const contenedorTF = document.querySelector(".container_Flotante");
const tagTarjetaFlotante = document.getElementById("evento_tarjeta_Flotante");
const url = "datos_tarjetas_areas.json";


fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.sort(function (a, b) {
      return a.orden - b.orden;
    });
    data.forEach((data) => createTarjeta(data));
  })
  .catch((err) => console.log(err));
