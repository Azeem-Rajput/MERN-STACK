let name="ares "
let rollNo=23
//  console.log(name+rollNo)

// console.log(`hello my name is ${name}and my roll number is ${rollNo}`)

const game=new String('Azeem')

// console.log(game[3])
// console.log(game.__proto__)  // looks empty {}
// console.dir(game.__proto__);  // shows full prototype object
//                or
// console.log(Object.getOwnPropertyNames(game.__proto__));// shows full prototype object




// __proto__ i the all prototypes of object (like the string which we use its holds diff. prototypes like uppercase letter, lenght that we call below....)
// console.log(game.length)

// console.log(game.toUpperCase())
// console.log(game.charAt(2))
// console.log(game.indexOf('e'))

const newString=game.substring(0,3)
//  console.log(newString)

const anotherString=game.slice(1,-2)
// console.log(anotherString);

const lushString="   azeem    "
// console.log(lushString.trimEnd())

const url="http://azeem.com/azeem%20ans100"

//  console.log(url.replace('100','---'))

// console.log(url.includes('rajput'))
// console.log(url.includes('azeem'))


 console.log(game.split('-'))






