'use strict'

fetch('https://jsonplaceholder.typicode.com/todos/5')
  .then( res => {
    if ( res.ok ) {
      return res.json()
    }
    throw new Error('No se pudo obtener la info')
  })
  .then( data => console.log(data))
  .catch( err => console.error( err ) ) // Solo se dispara para errores de red pero podemos lanzarlos nostros