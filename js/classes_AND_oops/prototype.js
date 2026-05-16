// let myName="azeem"
// let mynameTwo="rajput"

// console.log(myName.truename)


let myHeros=['thor','spiderman']
let heroPowers={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function()
    {
        console.log(`spider power is ${this.spiderman}`)
    }

}

Object.prototype.hitesh=function(){
    console.log(`hitesh teaching js on his channel`)
}
Array.prototype.hitesho=function(){
    console.log(`hitesh is chaudhary`)
}

myHeros.hitesh()
heroPowers.hitesh()
myHeros.hitesho()
// heroPowers.hitesho()


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()

"hitesh".trueLength()
"iceTea".trueLength()