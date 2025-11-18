var c=100       //   ( Global Scope)
let a=200

if (true)       //  (
{
    let a=2     //       Block Scope
    const c=99  //  )
}

// console.log(a)
//      console.log(a)
// console.log(c)


function onee()
{
    namea="AZeem"
    function twoo()
    {
        nameb="RAjput"
        // console.log(namea)
    }
    // console.log(nameb)

    twoo()
}
onee()


// --------------------Intresting--------------------------
addingOne(9)
function addingOne(num)
{
    return num+1
}

two(11)
const two=function(num)
{
    return num+2
}

