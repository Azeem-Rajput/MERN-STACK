// singleton
// object.create ( also known as "through constructor")

// object literals
const mySymb=Symbol("cluster")
const JsUser={
    name:"Muhammad Azeem",
    "full name":"M-A-R",
    [mySymb]:"key1",   // syntex of using symbol in object is[]
    age:18,
    location:"kdj",
    logIn:"azeem@software.com",
    logInDay:["monday","thursday"]
}

console.log(JsUser.name)  // its not valid way
console.log(JsUser["age"]) // another way    /* In behind name,age.location,etc all objects treat as string */

// console.log(JsUser["full name"])
// console.log(JsUser[mySymb])
// console.log(typeof mySymb)

// JsUser.logIn="azeem@gpt.com"
// console.log(JsUser)
// Object.freeze()
// JsUser.logIn="azeem@softs.com"


// defining function

JsUser.info=function(){
    console.log("Arm wrestler")
}

JsUser.infotwo=function(){
    console.log(`Arm wrestler,${this.name}`)
}
JsUser.info() 
JsUser.infotwo() 