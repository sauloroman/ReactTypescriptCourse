const mexico = {
  name: 'Mexico',
  population: 127e6,
}

const eua = {
  name: 'eua',
  population: 300e6
}

const cart = {
  amount: 1,
  ...mexico,
}

const countries = {
  mexico,
  eua
}

console.log(cart);

const newCountries = Object.assign( mexico, eua )
console.log(newCountries)




