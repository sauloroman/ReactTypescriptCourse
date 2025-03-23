const amount = 4000
const withdrawal = 2000

if ( amount >= withdrawal ) {
  console.log('Puedes retirar')
} else {
  console.log('No tienes suficiente dinero')
}

const auth = true

if ( auth ) {
  console.log('Accesso al sistema...')
} else {
  console.log('No tienes permiso, inicia sesion')
}

let value = '10'
const valueNumber = 10

if ( value == valueNumber ) {
  console.log('Son iguales en valor')
}

// Operador estricto
value = 10
if ( value === valueNumber ) {
  console.log('Son iguales en valor y en tipo')
}