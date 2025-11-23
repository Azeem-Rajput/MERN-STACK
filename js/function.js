function sayMyname(){
    console.log("Azeem")
    console.log("Rajput")
}
// sayMyname()

// function addNumbers(num1,num2)  //.............. { (num1 & num2) are parametrs(when num1 and num2 are form ) } 
// {
//     console.log(num1+num2)
// }


function addNumbers(num1,num2)
{
    // console.log("kjdsuh")
    return num1+num2
    console.log("wnj")
}
const result=addNumbers(2,3)    // .................when value are passing then is known as arguments ( when we call function )
// console.log(result)



function weLogin(username)  // we use as a default like (username="kka")
{
    if(!username)  // ---------if(username==undefined)
    { 
        // console.log("Enter your username")
        return
    }
    return `${username} is logged in`
}
// console.log (weLogin())   //  weLogin()





function countingItemOfstore(...num)  // Rest operator(...) mens how multiple values passes through function
{
    return num
}
// console.log(countingItemOfstore(1000,2000,3000))






// ----------------------Access object in function-------------------------
const obj1={
    realName:"Azeem",
    id:937
}

function obf(object)  // we pass value is must me object data type e.g(object)
{
    // console.log(`the real name is=${object.realName} and the unique id is=${object.id}`)
}

// obf(obj1)
obf({

    realName:"Rajput",
    id:22000
    
})






//------------------------Access array in function----------------------
const array=[29,900,11]

function withArray(otherArray)
{
    return `The secand value of aaray is ${otherArray[1]}`
}
// console.log(withArray(array))
console.log(withArray([100,300,7100]))


