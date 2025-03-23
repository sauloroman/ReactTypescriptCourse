const technologies = ['Html', 'Css', 'Javascript', 'React.js', 'Node.js']

const [ firstTech, , javascript, ...restTech ] = technologies

console.log({ firstTech, javascript })
console.log(restTech)