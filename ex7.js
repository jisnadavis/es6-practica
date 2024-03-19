const exams = [
  { name: 'Yuyu Cabeza Crack', score: 5 },
  { name: 'Maria Aranda Jimenez', score: 1 },
  { name: 'Cristóbal Martínez Lorenzo', score: 6 },
  { name: 'Mercedez Regrera Brito', score: 7 },
  { name: 'Pamela Anderson', score: 3 },
  { name: 'Enrique Perez Lijó', score: 6 },
  { name: 'Pedro Benitez Pacheco', score: 8 },
  { name: 'Ayumi Hamasaki', score: 4 },
  { name: 'Robert Kiyosaki', score: 2 },
  { name: 'Keanu Reeves', score: 10 }
]
const totalscore = exams.reduce((acu, exam) => exam.score + acu, 0)
console.log(totalscore)
//7.2
const totalscore1 = exams.reduce((acu, exam) => {
  if (exam.score > 5) {
    return exam.score + acu
  }
  return acu
}, 0)
console.log(totalscore1)
//7.3
const totalscore3 = exams.reduce((acu, exam) => {
  return acu + exam.score / exams.length
}, 0)
console.log(totalscore3)
