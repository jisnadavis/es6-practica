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
console.log(findarrayindex(mainCharacters, 'Anakin'))
