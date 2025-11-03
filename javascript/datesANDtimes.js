// dates
let theDates=new Date()

// console.log(typeof theDates);

// console.log(theDates.toString())
// console.log(theDates.toISOString())
// console.log(theDates.toJSON())
// console.log(theDates.toLocaleDateString())
// console.log(theDates.toLocaleString())
// console.log(theDates.toLocaleTimeString())

let fixDate=new Date(2025,2,23)
// console.log(fixDate.toLocaleDateString())

let otherDate=new Date("2025-01-22")
// console.log(otherDate.toLocaleDateString())

let timeStamp=Date.now()
// console.log(timeStamp)
// console.log(otherDate.getTime())

// console.log(Date.now())  //to convert it in to secands so divided by 1000
// console.log(Math.floor(Date.now()/1000))

let date=new Date()
console.log(date.getMonth()+1)
console.log(date.getFullYear())

date.toDateString('dafault',{
  fixDate: "long"
})