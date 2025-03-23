const url1 = 'https://pokeapi.co/api/v2/pokemon/1'
const url2 = 'https://jsonplaceholder.typicode.com/todos/5'

const getInfoFromApis = async () => {

  try {

    const start = performance.now()

    const resp1 = await fetch( url1 )
    const data1 = await resp1.json()
    console.log(data1)

    const resp2 = await fetch( url2 )
    const data2 = await resp2.json()
    console.log(data2)

    const end = performance.now()

    console.log(`El resultado de la primera funcion es: ${end - start}ms`)
  } catch (error) {
    console.log(error)
    throw new Error( error.message )
  }

} 

getInfoFromApis()


const getInfoFromApis2 = async() => {

  try {

    const start = performance.now()

    const [ resp1, resp2 ] = await Promise.all([
      fetch( url1 ),
      fetch( url2 )
    ])

    const [ data1, data2 ] = await Promise.all([
      resp1.json(),
      resp2.json()
    ])

    console.log({ data1, data2 })

    const end = performance.now()

    console.log(`El resultado de la segunda funcion es: ${end - start}ms`)

  } catch (error) {
    console.log(error.message)
  }

}

getInfoFromApis2()