const array=["azeem","rajput","hamza","rajput"]
const arrayOther=["mateen","rajput","salahuddin","rajput"]

// array.push(arrayOther)
// console.log(array[4][2])

// const mergeArray=array.concat(arrayOther)
// console.log(mergeArray[0])
//               or
const mergeArray=[...array,...arrayOther]
// console.log(mergeArray[6])

console.log(Array.isArray("azeem")) 
console.log(Array.from("azeem")) 
console.log(Array.from({name:"azeem"})) // intresting
let score1=10
let score2=20
let score3=30
console.log(Array.of(score1,score2,score3))