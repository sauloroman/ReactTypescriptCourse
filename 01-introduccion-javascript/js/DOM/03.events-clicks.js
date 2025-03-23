const heading = document.querySelector('.heading')
const anchors = document.querySelectorAll('.navegacion a')

heading.style.cursor = 'pointer'

heading.addEventListener('click', e => {
  document.body.style.backgroundColor = 'red'
  console.log(e.target)
})

heading.addEventListener('mouseleave', () => {
  heading.textContent = 'Saliendo'
})

anchors.forEach( anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault()
    e.target.style.transform = 'scale(1.7)'
    e.target.style.marginRight = '50px'
  })
})