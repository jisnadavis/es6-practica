const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]
const swap = (array, index1, index2) => {
  const temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp

  return array
}

const swappedFantasticFour = swap(fantasticFour, 1, 2)
console.log(swappedFantasticFour)
