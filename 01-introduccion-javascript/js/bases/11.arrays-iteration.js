const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.warn('For')

const evenNumbers = numbers.filter( num => num % 2 == 0 )
for( let i = 0; i < evenNumbers.length; i++ ) {
  console.log(evenNumbers[i])
}

// for - of
console.warn('For-of')

const oddNumbers = numbers.filter( num => num % 2)
for( const number of oddNumbers ) {
  console.log('El numero es:', number)
}

// foreach

const showNumber = function( num ) {
  console.log(`Hi, my value is ${num}`)
}

console.warn('Foreach')
numbers.forEach( showNumber )


// map

const duplicateNumbers = function( num ) {
  return num * 2
}

console.log(numbers.map( duplicateNumbers ))