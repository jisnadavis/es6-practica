const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const filter1 = (e) => {
  const filterd = streamers.filter((stremer) =>
    stremer.name.toLowerCase().includes(e.target.value)
  )
  console.log(filterd)
}
const input = document.querySelector('input')
input.addEventListener('input', filter1)
