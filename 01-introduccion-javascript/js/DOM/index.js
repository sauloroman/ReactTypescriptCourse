const form = document.querySelector('#formulario')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const name = document.querySelector('#nombre').value
  const password = document.querySelector('#password').value

  const preAlert = document.querySelector('.alerta')
  preAlert?.remove()

  const alert = document.createElement('DIV')
  alert.classList.add('clase1', 'clase2', 'alerta', 'text-white', 'text-center', 'p-2', 'font-black')

  if ( name === '' || password === '' ) {
    alert.textContent = 'Todos los campos son obligatorios...'
    alert.classList.add('bg-red-500')
  } else {
    alert.textContent = 'Authenticando usuario'
    alert.classList.add('bg-green-500')
  }

  form.insertAdjacentElement('afterbegin', alert)

  setTimeout(() => alert.remove(), 2000 )

})
