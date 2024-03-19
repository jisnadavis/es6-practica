const rollDice = (numFaces) => {
  const randomValue = Math.floor(Math.random() * numFaces) + 1
  return randomValue
}

// Ejemplo de uso:
const numFaces = 6 // Un dado de 6 caras
const result = rollDice(numFaces)
console.log(
  `Has lanzado un dado de ${numFaces} caras y obtuviste un ${result}.`
)
