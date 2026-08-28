import React from "react"

const Sum=React.memo(({number})=>{                         // is used for checking  or memorize that  the child dependency on parent if it does not depent then memo does not run that code
   
    console.log("Sum render")

    function calculateSum(){
        let sum=0;
        for(let i=1;i<=number;i++)
        {
            sum+=i;
        }
        return sum;
    }

    const total=calculateSum()

    return(
        <>
        <h1>SUm of numbers</h1>
        <h2>{total}</h2>
        
        </>
    )
   
})


export default Sum;