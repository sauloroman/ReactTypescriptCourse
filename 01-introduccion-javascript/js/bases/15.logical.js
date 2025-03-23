const amount = 500
const bill = 200
const hasCard = false

// if ( amount > bill ) {
//   console.log('You can pay...');
// } else if ( hasCard ) {
//   console.log('You can pay...')
// } else {
//   console.log('You cannot pay');
// }

if ( amount > bill || card ) {
  console.log('You can pay')
} else {
  console.log('You cannot pay')
}

if ( amount > bill && hasCard ) {
  console.log('You can pay with card')
} else {
  console.log('You cannot pay')
}