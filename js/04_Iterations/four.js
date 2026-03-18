// so we check loop on object   .....{ as we see that (for of)loop is not working on objects}


const myobj={
    html:'HTML for text',
    css:'css for design',
    js:'javascript'
}
// FOR IN loop
for (const key in myobj) {
//    console.log(`${key} is related to and it is ${myobj[key]}`)
}


// so we check array
const array=['azeem','rajput']
for (const key in array) {
    console.log(key)
    console.log(array[key])
}

