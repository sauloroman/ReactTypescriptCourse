const authenticated = true

if ( authenticated ) {
  console.log('Usuario authenticado')
} else {
  console.log('Usuario no autenticado. Ir a login')
}

console.log( authenticated ? 'Usuario authenticado' : 'Usuario no autenticado. Ir a login')

const money = 1500

const message = authenticated 
  ? (money > 2000 ? 'Pagado' : 'No tienes suficiente dinero')
  : 'No estas autenticado'

console.log(message)