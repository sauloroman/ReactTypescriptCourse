'use strict'

const technologies = ['Html', 'Css', 'Javascript', 'React.js', 'Node.js']

console.table(technologies)

technologies[4] = 'Nest.js'
technologies[10] = 'SASS'

console.table(technologies)

// Array method

console.log(technologies.at(1))
console.log(technologies.at(-1))
console.log(technologies.includes('Html'))
console.log(technologies.push('Next.js'))
console.log(technologies.pop())
console.log(technologies.shift())
console.log(technologies.unshift('C#'))


const newArray = [ ...technologies ]
const newArray2 = technologies.slice() 
console.log({ technologies })
console.log(newArray)
console.log(newArray2)

const tech = technologies.filter( function(tech) {
  if (tech !== 'Javascript') {
    return tech
  }
})

console.log(tech)

const upperTech = technologies.map( function(tech) {
  return tech.toUpperCase()
})

console.log(upperTech) 