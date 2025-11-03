const array=["azeem","rajput","hamza","rajput"]
const arrayOther=["mateen","rajput","salahuddin","rajput"]

// array.push(arrayOther)
// console.log(array[4][2])

// const mergeArray=array.concat(arrayOther)
// console.log(mergeArray[0])
//               or
const mergeArray=[...array,...arrayOther]
console.log(mergeArray[6])