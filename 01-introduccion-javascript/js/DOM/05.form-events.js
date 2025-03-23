const form = document.querySelector('#formulario')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const name = document.querySelector('#nombre').value
  const password = document.querySelector('#password').value
  
  if ( name === '' || password === '' ) return console.log('Todos los campos son obligatorios')

  const formData = new FormData()
  formData.append('name', name)
  formData.append('password', password)

  //* Enviando a base de datos
  console.log(formData.get('name'))

  console.log('enviando formulario')
})
