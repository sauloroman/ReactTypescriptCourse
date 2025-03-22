// Tipos Primitivos

// 1. Strings
// 2. Numbers
// 3. Booleans
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Symbol

// Undefined
let cliente //undefined
let pet = undefined
console.log(typeof cliente)

// Strings
const student = 'Danna'
const mother = "Erika"
console.log({student})
console.log(typeof student)

// Numbers
const myAge = 26
let quantity = 192.21
console.log({myAge})
console.log(typeof quantity, typeof myAge)

// BigInt
const myBigInt = BigInt(10e19)
console.log(myBigInt)
console.log(typeof myBigInt)

// Boolean
const isWoman = false
const hasChildren = true
console.log(typeof hasChildren)
console.log(typeof isWoman)

// Null
const discount = null
console.log(discount)
console.log(typeof discount) // object

// Symbol
const firstSymbol = Symbol(10)
const secondSymbol = Symbol(10)
console.log(firstSymbol)
console.log(typeof firstSymbol)
console.log(firstSymbol === secondSymbol)