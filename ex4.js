//4,1
const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]
const names = users.map((user) => user.name)
console.log(names)
//4.2
const users1 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]
const rename = users1.map((user) => {
  if (user.name[0] == 'A') {
    return 'anacleto'
  } else {
    return user.name
  }
})
console.log(rename)
//4.3
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
]
const citelist = cities.map((city) => {
  if (city.isVisited == true) {
    return (city.name += 'visitado')
  } else {
    return city.name
  }
})
console.log(citelist)
