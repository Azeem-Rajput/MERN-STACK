// const array=[1,2,3,4]

// const total=array.reduce( function (acc,currval) {
    // console.log(`${acc} is accumulator and ${currval} is current value`)
    // return acc+currval
// } ,0)    // here 0 is initial value
// console.log(total)


const books=[
    {
        course:'js',
        price:999
    },
    {
        course:'python',
        price:1999
    },
    {
        
        course:'react',
        price:2999
    }
]

const totalp=books.reduce( (acc,value)=>acc+value.price,0 )
console.log(totalp)