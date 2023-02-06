/* eslint-disable no-multiple-empty-lines */
/* eslint-disable padded-blocks */
const numeroPokemon = prompt('Numero de Pokemosn 1-900', 10)
const indexDatos = document.querySelector('.contenedorApi')

const divflotante = document.querySelector('.Flotante_contenedor')
const cartaDatosTitulo = document.querySelector('.Flotante_titulo')
const cartaDatosImagen = document.querySelector('.Flotante_imagen')
const cartaDatosTexto = document.querySelector('.Flotante_texto')

const pokeapi = 'https://pokeapi.co/api/v2/pokemon'

if (!numeroPokemon || typeof numeroPokemon === 'string') {
  console.log(numeroPokemon)
  llamadaPokemon(`${pokeapi}/25`)
}

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
  carta.classList.add('cartaContenedor')

  // [Carta - Contenido]
  const contenedorName = document.createElement('p')
  contenedorName.classList.add('cartaName')
  contenedorName.innerHTML = dataPokemon.name

  const contenedorImg = document.createElement('div')
  contenedorImg.classList.add('cartaContenedorImg')

  const imagen = document.createElement('img')
  imagen.classList.add('cartaImg')
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
    cartaDatosImagen.innerHTML = ''
    speechSynthesis.cancel()
  })

  // [Nombre]
  cartaDatosTitulo.innerHTML = dataPokemon.name
  // [Imagen]
  const imagenFlotante = document.createElement('img')
  imagenFlotante.classList.add('Flotante_img')
  imagenFlotante.src = dataPokemon.sprites.other.home.front_default
  cartaDatosImagen.appendChild(imagenFlotante)

  const textoPokemon = dataPokemon.species.url
  informacionPokemon(textoPokemon)
}

// --[■■■ Info Basica ■■■]
async function informacionPokemon (dataTexto) {
  try {

    // [Enlace Api]
    const TextoRespuesta = await fetch(dataTexto)
    const TextoPokemon = await TextoRespuesta.json()

    const textoIdiomas = TextoPokemon.flavor_text_entries
    const textoEspañol = []
    // console.log(TextoPokemon.flavor_text_entries)
    textoIdiomas.forEach((i) => {
      if (i.language.name === 'es') {
        console.log(i.flavor_text)
        textoEspañol.push(i.flavor_text)
      }
    })

    const randomTexto = textoEspañol[Math.floor(Math.random() * textoEspañol.length)]

    const utterance = new SpeechSynthesisUtterance()
    utterance.text = randomTexto
    utterance.lang = 'es-ES'
    utterance.rate = 1
    window.speechSynthesis.speak(utterance)

    cartaDatosTexto.innerHTML = randomTexto


  } catch (error) {
    console.error(error)
  }
}
//Comentario Prueba

