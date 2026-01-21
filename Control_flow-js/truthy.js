const userMail="azeem@chat.com"   //  [] (that condition considered as true), "" (that condition considered as false) ---------Why???
if(userMail)
{
    // console.log("found user email")
}
else
{
    // console.log("not found any user email")
}


// falsy values:-
// (false, 0, -0, BigInt(0n), undefined, null, NAN, "")

// truthy values:-
// ("0", "false", " ", {}, [], function(){})



// ---------to check array is empty---------
const mmail=[]
if(mmail.length==0)
{
    // console.log("array is empty")
}


// +++++++++to check object is empty+++++++++
const createObj={}
if(Object.keys(createObj).length=== 0)
{
    // console.log("the object which is form is empty")
}




// ---------------------------- Nulish Coalescing Operator(??)(new operator):- null undefined--------------------------------

let val
// val=5 ?? 30
// val=30 ?? 5
// val=null ?? 20
// val=20 ?? undefined
val=undefined ?? null ?? 30

// console.log(val)


// +++++++++++++++++++++++++++++ Terniary operator ++++++++++++++++++++++++++++++++++++
//      ? (act like if)and :(act like else)
// e.g;

const bookPrice=200
bookPrice<=100 ? console.log("less than or equal to 100") : console.log("Greater than 100")