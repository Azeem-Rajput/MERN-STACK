// ---------- map-----------

const array=[1,2,3,4,5,6,7,8,9,10]

// const s=array.map( (val)=>val+10 )
// console.log(s)

//      or

// const re=[]
// array.forEach( (val)=>{
//     re.push(val+10)
// } )
// console.log(re)

//-----------chaining------------
const value=array
                .map( (v)=>v*10 )
                .map( (v)=>v+1 )
                .filter( (v)=>v<20 )

console.log(value)
