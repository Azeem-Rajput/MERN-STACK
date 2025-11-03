// Primitive Data Type
// 7types:-
//         string,number,null,undefined,BigInt,bolean,symbol

const num=29
const realNum=29.3
const temp=null
let name;

const Id=Symbol('125')
const uniqueId=Symbol('1276')
// console.log(Id==uniqueId)

const bigNumber= 9007199254740991989n
// console.log(typeof bigNumber)




// Reference(non-Primitive) 
// 3types:-
//         array,object,functions ( data types is object )

//arrays  (data type=object)

const boys=["rajput","ali","Azeem"]
let myObj={
    age:23,
    gender:"male"
}

//functions   (data type=function object)
const func=function()
{
    console.log("Azeem")
}

console.log(typeof Id)