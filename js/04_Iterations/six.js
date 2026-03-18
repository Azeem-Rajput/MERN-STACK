// const array=['arm','wresling']

// const origin=array.forEach( (item)=>{
    // console.log(item)         //----------- it means that FOR EACH loop does not return any value(prove)
    // return item
// } )
// console.log(origin)



// ---------------for return values we use FILTER---------------
 const real=[1,2,3,4,5,6,7,8,9,10]
//const re= real.filter( (val)=>val>4 )        // filter( ()=>condition )
//console.log(re)
//            or
// const val=real.filter( (num)=>{
//   return num<=4
// } )
// console.log(val)



// When we use in FOR EACH loop
const sv=[]
real.forEach( (val)=>{
    if(val<4)
    {
        sv.push(val)
    }
} )
// console.log(sv)





const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981,
    edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
    edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999,
    edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989,
    edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009,
    edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987,
    edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986,
    edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011,
    edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish:1981,
    edition: 1989}
];

let values=books.filter( (bk)=>bk.genre=='History' )
values=books.filter( (bk)=>
    bk.edition>=2000 && bk.genre==='History' 
)
console.log(values)