// console.log(Math.PI)
// Math.PI=5
// console.log(Math.PI)

// const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter)

const chai={
    name:"chayee",
    price:465,
    isAvailable:true,

    orderChaye: function()
    {
        console.log("chaye nahi bni")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

 Object.defineProperty(chai,"name",{
//     writable:false,
     enumerable:true
 })

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for (const [key,value] of Object.entries(chai)) {
    if(typeof value!='function')
    {
        console.log(`${key} : ${value}`)    
    }
}
