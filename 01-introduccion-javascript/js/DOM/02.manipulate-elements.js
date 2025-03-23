const heading = document.querySelector('.heading')

heading.textContent = 'NEW HEADING'
heading.id = 'new-id'

heading.removeAttribute('id')

const inputName = document.querySelector('#nombre')
inputName.value = 'nuevo nombre'

console.log(inputName.className)
console.log(inputName.getAttributeNames())
inputName.dataset.newOne = true

document.querySelectorAll('.navegacion a').forEach( anchor => {
  anchor.textContent = 'Mi enlace'
})