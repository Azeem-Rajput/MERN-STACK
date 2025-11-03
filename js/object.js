// singleton
// object.create ( also known as "through constructor")

// object literals
const JsUser={
    name:"Muhammad Azeem",
    age:18,
    location:"kdj",
    logIn:"azeem@software.com",
    logInDay:["monday","thursday"]
}
console.log(JsUser.name)  // its not valid way
console.log(JsUser["age"]) // another way    /* In behind name,age.location,etc all objects treat as string */