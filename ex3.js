//3.1
const pointsList = [32, 54, 21, 64, 75, 43]
const points = [...pointsList]
console.log(points)
//3.2
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toys = { ...toy }
console.log(toys)
//3.3
const pointsList1 = [32, 54, 21, 64, 75, 43]
const pointsLis2 = [54, 87, 99, 65, 32]
const pointsLis3 = [...pointsList1, ...pointsLis2]
console.log(pointsLis3)
//3.4
const toy1 = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }
const toysdest = { ...toy1, ...toyUpdate }
console.log(toysdest)
//3.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']
const colors1 = [...colors]
const index = colors1.indexOf('amarillo')
colors1.splice(index, 1)
console.log(colors1)
