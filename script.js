const tagTarjetaFlotante = document.getElementById("api");

/*  Contenedor de las tarjetas Variables y el Fetch para acceder a la informacion
    Situada en el Json datos_tarjetas_areas
*/

const puesto = parseInt(prompt('Numero de Puesto'));
const pokeapi = "https://pokeapi.co/api/v2/pokemon/${puesto}";

/*--[ ■ ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ ]--*/

async function llamadaApi () {

  try {
    const respuesta = await fetch(pokeapi);
    const data = await respuesta.json()

    insertaEnDocumento(data)

  } catch (error) {
    console.error(error);
  }
  // body
}

/*--[ ■ ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ ]--*/

function insertaEnDocumento (data) {
  const card = document.createElement(div);
  
  const contenedorName = document.createElement(p);
  const contenedorImg = document.createElement(div);
  const imagen = document.createElement(img);

  card.classList.add("");
  contenedorName.classList.add("");
  contenedorImg.classList.add("")

  contenedorName = data.name;
  contenedorImg = data.sprites.front_default
}