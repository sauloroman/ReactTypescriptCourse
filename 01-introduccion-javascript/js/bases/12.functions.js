// Function declaration

function sayHi( username = 'unknown') {
  console.log(`Hi ${username}`)
}
sayHi('Roman')
sayHi()

function sum( ...numbers ) {
  return numbers.reduce( (acc, num) => acc + num, 0)
}

const result = sum(1, 2, 3, 4, 5, 6)
console.log(result)


// Function expression
const getMaxNumber = function( ...numbers ) {
  return numbers.reduce( (max, num) => {
    if ( num > max ) return max = num
    return max
  }, numbers[0] )
}

const maximumNumber = getMaxNumber(234, 23, 2222, 21, 5, 220 )
console.log(maximumNumber)

// Function expression ( arrow function )

// const calculateBirthYear = ( birthYear ) => {
//   return new Date().getFullYear() - birthYear
// } 

const calculateAge = birthYear => new Date().getFullYear() - birthYear

console.log(calculateAge(1998))

