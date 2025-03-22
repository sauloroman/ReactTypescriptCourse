const superhero = {
  name: 'Tony Stark',
  age: 46,
  hasSuperpowers: false,
}

// Evitar que se modifique, agregue o elimine una propiedad
// Object.freeze( superhero )

// Te permite modificar unicamente
Object.seal( superhero )

// Reescribir 
superhero.hasSuperpowers = true

// Crear una nueva propiedad
superhero.wife = 'Pepper Pots'

// Eliminar una propiedad
delete superhero.age


console.table( superhero )