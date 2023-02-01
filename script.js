/* eslint-disable no-multiple-empty-lines */
/* eslint-disable padded-blocks */

const indexDatos = document.querySelector('.api')
const pokeapi = 'https://pokeapi.co/api/v2/pokemon'

// --[■■■ Api - Obtiene Listas de Url ■■■]
async function listaUrlPokemon () {
  try {

    // [Enlace Api]
    const respuestaLista = await fetch(pokeapi)
    const dataLista = await respuestaLista.json()
    const pokemonLista = Array.from(dataLista.results)

    // [Llama Funcion]
    for (const params of pokemonLista) {
      await llamadaPokemon(params.url)
    }

  } catch (e) {
    console.error(e)
  }
}

// --[■■■ Api - Obtiene Informacion del Pokemon ■■■]
async function llamadaPokemon (urlpokemon) {
  try {

    // [Enlace Api]
    const respuesta = await fetch(urlpokemon)
    const dataPokemon = await respuesta.json()

    // [Llama Funcion]
    insertaCartaPokemon(dataPokemon)
    console.log(dataPokemon.id)

  } catch (error) {
    console.error(error)
  }
}

// --[■■■ Inserta Contenido HTML ■■■]
function insertaCartaPokemon (data) {

  // [Carta]
  const carta = document.createElement('div')
  carta.classList.add('carta')


  // [Carta - Contenido]
  const contenedorName = document.createElement('p')
  contenedorName.classList.add('cartaName')
  contenedorName.innerHTML = data.name

  const contenedorImg = document.createElement('div')
  contenedorImg.classList.add('cartaContenedorImg')

  const imagen = document.createElement('img')
  imagen.src = data.sprites.front_default


  // [Carta - Union de Contenido]
  contenedorImg.appendChild(imagen)
  carta.appendChild(contenedorName)
  carta.appendChild(contenedorImg)

  // [Carta - Insercion al HTML]
  indexDatos.appendChild(carta)

}

listaUrlPokemon()
