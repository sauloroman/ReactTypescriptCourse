const inputName = document.querySelector('#nombre')
const inputPassword = document.querySelector('#password')

inputName.addEventListener('input', (e) => {
  console.log(e.target.value)
})

const passwordFn = () => {
  inputPassword.type = 'text'

  setTimeout(() => {
    inputPassword.type = 'password'
  }, 5000)
}

inputPassword.addEventListener('input', passwordFn )
