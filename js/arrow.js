const customer={

    name:"Azeem",
    pass:120,
    print:function()
    {
        
        // console.log(`${this.name}--welcome to account`)
        // console.log(this)  // "this" --> talk about current values

    }

}


// customer.print()
// customer.name="Rajput"
// customer.print()

// console.log(this)  // if it check in browser then it is "Window" object



// function chaye()
// {
//     let username="aazeem"
//     console.log(this.username)   // Wed see that "this" is only works in object
// }
// chaye() 



// const chaye=function ()
// {
//     let username="aazeem"
//     console.log(this.username)   // Wed see that "this" is only works in object
// }
// chaye() 



const chaye= ()=>
{

    let username="aazeem"
    // console.log(this.username)   // Wed see that "this" is only works in object

}

chaye() 
//----------------------Explisit return(when curly braces use)-------------------

// const adding=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(adding(2,2))

// ++++++++++++++++++++Implisit return(when no any curly braces use)
// const adding=(num1,num2) =>  (num1+num2)  // with no curly braces
// console.log(5+5)


// ...........for object.............

const add=(num1 , num2) => {nameo:"Azeem Rajput"}

console.log(add(2 , 7))