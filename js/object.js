// singleton
// object.create ( also known as "through constructor")

// object literals

const mySymb=Symbol("cluster")
const JsUser={
    name:"Muhammad Azeem",
    "full name":"M-A-R",
    [mySymb]:"key1",   // syntex of using symbol in object
    age:18,
    location:"kdj",
    logIn:"azeem@software.com",
    logInDay:["monday","thursday"]
}
console.log(JsUser.name)  // its not valid way
console.log(JsUser["age"]) // another way    /* In behind name,age.location,etc all objects treat as string */
console.log(JsUser["full name"])
console.log(typeof JsUser[mySymb])