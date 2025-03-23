const technologies = ['Javascript', 'Typescript', 'React', 'Nest']
const numbers = [10, 20, 30]

// find
const myFavoriteTech = technologies.find( tech => tech === 'React')
console.log(myFavoriteTech) 

// filter
const webLenguages = technologies.filter( tech => tech.endsWith('script'))
console.log(webLenguages)

// includes
const hasTypescript = technologies.includes('Typescript')
console.log(hasTypescript)

// map
const upperTech = technologies.map( tech => tech.toUpperCase() )
console.log(upperTech)

// some
const anyElementStartsWithR = technologies.some( tech => tech.startsWith('R') )
console.log(anyElementStartsWithR)

// every
const allElementsHaveAtLeast5Characters = technologies.every( tech => tech.length >= 5 )
console.log(allElementsHaveAtLeast5Characters)

// reduce
const sumNumbers = numbers.reduce( (acc, num) => acc + num, 0)
console.log('Suma de numeros:', sumNumbers )

console.log(Array.prototype)