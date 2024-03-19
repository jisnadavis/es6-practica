const game = {
  title: 'The last us 2',
  gender: ['action', 'zombie', 'survival'],
  year: 2020
}
const { title, gender, year } = game
console.log(`${title} ${gender} ${year}`)
//2.2

const fruits = ['Banana', 'Strawberry', 'Orange']

const [fruit1, fruit2, fruit3] = fruits

console.log(`${fruit1} ${fruit2} ${fruit3}`)
//2.3
const animalFunction = () => {
  return { name: 'Bengal Tiger', race: 'Tiger' }
}

const { name: nameAnimal, race } = animalFunction()

console.log(`${nameAnimal}  ${race}`)
//2.4
const car = { name: 'Mazda 6', itv: [2015, 2011, 2020] }
const { name: marca, itv: año_de_itv } = car
console.log(`${marca}  ${año_de_itv}`)
const [pano, sano, taño] = año_de_itv
console.log(`${pano} ,${sano}, ${taño}`)
