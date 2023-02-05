/* eslint-disable no-multiple-empty-lines */
/* eslint-disable padded-blocks */
const numeroPokemon = prompt('Numero de Pokemosn 1-900', 10)
const indexDatos = document.querySelector('.contenedorApi')
const divflotante = document.querySelector('.contenedorFlotante')
const cartaDatosTitulo = document.querySelector('.tituloFlotante')


const pokeapi = 'https://pokeapi.co/api/v2/pokemon'

divflotante.style.visibility = 'hidden'


// --[■■■ Api - Obtiene Listas de Url ■■■]
// async function listaUrlPokemon () {
//   try {

//     // [Enlace Api]
//     const respuestaLista = await fetch(pokeapi)
//     const dataLista = await respuestaLista.json()
//     const pokemonLista = Array.from(dataLista.results)

//     // [Llama Funcion]
//     for (const params of pokemonLista) {
//       await llamadaPokemon(params.url)
//     }

//   } catch (e) {
//     console.error(e)
//   }
// }
ejecucion()

async function ejecucion () {
  for (let i = 1; i <= numeroPokemon; i++) {
    await llamadaPokemon(`${pokeapi}/${i}`)
    console.log(`${pokeapi}/${i}`)
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
function insertaCartaPokemon (dataPokemon) {

  // [Carta]
  const carta = document.createElement('div')
  carta.classList.add('carta')


  // [Carta - Contenido]
  const contenedorName = document.createElement('p')
  contenedorName.classList.add('cartaName')
  contenedorName.innerHTML = dataPokemon.name

  const contenedorImg = document.createElement('div')
  contenedorImg.classList.add('cartaContenedorImg')

  const imagen = document.createElement('img')
  imagen.classList.add('imagenes')
  // imagen.src = data.sprites.front_default
  imagen.src = dataPokemon.sprites.versions['generation-v']['black-white'].animated.front_default




  // [Carta - Union de Contenido]
  contenedorImg.appendChild(imagen)
  carta.appendChild(contenedorName)
  carta.appendChild(contenedorImg)

  // [Carta - Insercion al HTML]
  indexDatos.appendChild(carta)


  // [Carta - Evento]
  carta.addEventListener('click', () => {
    divflotante.style.visibility = 'visible'
    eventoTarjetaFlotante(dataPokemon)
  })
}


// --[■■■ Evento de Tarjeta ■■■]
function eventoTarjetaFlotante (dataPokemon) {

  divflotante.addEventListener('click', () => {
    divflotante.style.visibility = 'hidden'
  })

  // if (dataPokemon.name) {
  //   console.log(dataPokemon.name)
  //   const valor = dataPokemon.name
  //   tituloflotante.textContent = toString(valor)

  // } else {
  //   console.log('Nada')
  // }

  cartaDatosTitulo.innerHTML = dataPokemon.name


}

