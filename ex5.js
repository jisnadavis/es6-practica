const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const filterarray = ages.filter((age) => age > 18)
console.log(filterarray)
//5.2
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const filterd1 = ages1.filter((age) => age % 2 == 0)
console.log(filterd1)
//5.3
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
const stremer1 = streamers.filter(
  (player) => player.gameMorePlayed == 'League of Legends'
)
console.log(stremer1)
//5.4
const streamers2 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
const strem2 = streamers2.filter((player) => {
  if (player.name.includes('u')) {
    return player
  }
})
console.log(strem2)
