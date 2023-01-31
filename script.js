/*  Contenedor de las tarjetas Variables y el Fetch para acceder a la informacion
    Situada en el Json datos_tarjetas_areas
*/

const indexDatos = document.querySelector('.api')
// eslint-disable-next-line no-undef
const puesto = prompt('Numero Puesto', 1)

const pokeapi = `https://pokeapi.co/api/v2/pokemon/${puesto}`

/* --[ ■ ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ ]-- */

async function llamadaApi () {
  try {
    const respuesta = await fetch(pokeapi)
    const data = await respuesta.json()

    // console.log(data.name);
    // console.log(data.sprites.front_default);

    insertaEnDocumento(data)
  } catch (error) {
    console.error(error)
  }
}

/* --[ ■ ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ ]-- */

function insertaEnDocumento (data) {
  console.log(data.name)

  const carta = document.createElement('div')
  carta.classList.add('carta')

  const contenedorName = document.createElement('p')
  contenedorName.classList.add('cartaName')
  contenedorName.innerHTML = data.name

  const contenedorImg = document.createElement('div')
  contenedorImg.classList.add('cartaImg')

  const imagen = document.createElement('img')
  imagen.src = data.sprites.front_default

  // Insercion a Tarjeta
  contenedorImg.appendChild(imagen)

  carta.appendChild(contenedorName)
  carta.appendChild(contenedorImg)

  indexDatos.appendChild(carta)
}

llamadaApi()
