const student = {
  name: 'Roman nava',
  career: 'Software Development',
  age: 26,
}

const custom = {
  name: 'Danna Janeth',
  premium: true,
  address: {
    street: 'Republica Mexicana'
  }
}

const { name: studentName } = student
const { name: customName } = custom

console.log({ studentName, customName })

const { street } = custom.address
const { address: { street: newStreet }} = custom
console.log({ street, newStreet })