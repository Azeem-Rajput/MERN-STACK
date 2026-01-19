// ------------------ if ------------------ 

// if(condition)
// {
//     // scope
// }

const isLoggedIn=true

if (isLoggedIn)
{
    // if condition is true than scope works 
}

// < , > , <= , >= , != ,==(only check values) ,===(also check data types), !== 

// if(2=="2")
// {
//     console.log("executed")
// }

// if(2==="2")
// {
//     console.log("executed")
// }

// if(2!=="2")
// {
//     console.log("executed")
//  }

// else
// {
//     console.log("third statement not executed")
// }


// const score=20
// if(score<40)
// {
//     const code="o2n"
//     console.log(`the hidden code is=${code}`)
// }
// console.log(`the hidden code is=${code}`)



const amount=200
// if(amount>100) console.log("yes"),console.log("yesss")      immature style




const creditCard=true
const debitCard=true
const loggedInfromgoogle=false
const loggedInfromemail=true

if(creditCard && debitCard)
{
    console.log("you are eligible")
}
if(loggedInfromemail || loggedInfromgoogle)
{
    console.log("valid")
}

// ++++++++++ conditional randering +++++++++++