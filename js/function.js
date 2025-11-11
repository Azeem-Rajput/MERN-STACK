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
        console.log("Enter your username")
        return
    }
    return `${username} is logged in`
}
console.log (weLogin())   //  weLogin()



