// Coleccion llave valor

// Literal Objects
const product = {
  name: 'Screen LG',
  price: 199.99,
  inStack: false,
}

console.log(typeof product)
console.log(product)

console.dir( product )
console.table( product )

console.log(product.name)
console.log(product.price)
console.log(product['inStack'])
console.log(product.noExists) //undefined

// Desestructuracion

const { name, inStack: isAvailable } = product
console.log(name)
console.log(isAvailable)

const authenticated = true
const user = 'Roman'

const newUser = {
  authenticated,
  user,
  [5 > 10 ? 'yes' : 'no']: 'Cumple'
}

console.log(newUser)