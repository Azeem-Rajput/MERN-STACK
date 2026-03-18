// now we dicuss FOR EACH loop

const array=['arm','wresling']
// array.forEach( function (val) {
//     console.log(val)
// } )

                     // for arrow function
array.forEach( (val)=>{
    //console.log(val)
} )


// function some(item)
// {
//    // console.log(item)
// }
// array.forEach( some )


// array.forEach( (item,index,arr)=>{
//     console.log(item,index,arr)
// } )







const array2=[
    {
        name:'java',
        file:'js'
    },
    {
        name:'python',
        file:'py'
    },
    {
        name:'css',
        file:'cpp'
    }
]

array2.forEach( (val)=>{
    console.log(val.name)
} )