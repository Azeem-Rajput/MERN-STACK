// for (let index = 0; index < array.length; index++) 
// {
//     const element = array[index];
// }


for(let ind=0;ind<=10;ind++)
{
  const element=ind
  if(element==4)
    {
        // console.log("4 is secand even number")
    }  
//   console.log(element)   
}


for(let i=0;i<=10;i++)
{
    // console.log(`outer loop value=${i}`)
    for(let j=0;j<=10;j++)
    {
        // console.log(`${i} + ${j}= ${i+j}`)
    }
}



// ----------------------Array------------------
let theArray=["is","am","are"]
for (let index = 0; index < theArray.length; index++) 
{
    const element = theArray[index];
    
    console.log(element)
}





// _________________________________break & continue_________________________________

for (let index = 0; index <=20 ; index++)
     {


    if(index==5)
    {

        console.log("5 is caught")
        
        break
        
    }
    
    console.log(index)


}



for (let index = 0; index <=15; index++) {
    if(index==13)
        
    {
        console.log("13 detected")
        continue
    }

    console.log(index)
    
}