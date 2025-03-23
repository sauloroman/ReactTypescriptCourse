const getTodoById = async ( id = '1' ) => {

  try {

    const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    if ( !resp.ok ) throw new Error('Hubo un error al obtener la informacion')
    const todo = await resp.json()
    console.log({ todo })

  } catch (error) {
    console.log(error)
    throw new Error( error.message )
  }

} 

getTodoById(1)