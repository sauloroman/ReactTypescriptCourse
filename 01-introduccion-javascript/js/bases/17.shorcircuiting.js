// Optional chaining

const student = {
  name: 'Roman',
  course: 'Programming 1',
  passed: true,
  score: 0
}

console.log(student?.name && 'Si tiene nombre')
console.log(student?.score || 'Sin calificacion')

// Nullish coalescing operator
console.log(student?.score ?? 'Sin calificacion')