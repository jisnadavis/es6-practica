const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]
const findarrayindex = (array, item) => {
  return array.indexOf(item)
}

const removeItem = (array, text) => {
  const index = findarrayindex(array, text)

  if (index !== -1) {
    array.splice(index, 1)
  }
  return array
}
console.log(findarrayindex(mainCharacters, 'Anakin'))
console.log(removeItem(mainCharacters, 'Anakin'))
