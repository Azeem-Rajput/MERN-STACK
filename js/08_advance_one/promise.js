const promiseOne=new Promise(function(resolve,reject)
{
    //Do async task
    //DB calls,cryptography,network
    setTimeout(function(){
    console.log('Async task completed')
    resolve()
    },1000)
   
})

promiseOne.then(function(){
    console.log('Promise consumed')
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async 2 completed')
        resolve()
    },1000)
}).then(function(){
    console.log('promise2 consumed')
})



const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"AZEEM",mail:"azeem@example.com"})
    },1000)
})
promiseThree.then(function(e){
    console.log(e)
})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error)
        {
            resolve({username:"azeem",password:"1123"})
        }
        else
        {
            reject("ERROR,something went wrong")
        }
    }, 1000)
})
promiseFour
.then(function(user){
    console.log(user)
    return user.username
})
.then(function(userrr){
    console.log(userrr)
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log('The promise is resolved or either rejected')
})




const promiseFIve=new Promise(function(resolve,reject){
     setTimeout(function(){
        let error=true
        if(!error)
        {
            resolve({username:"JAVASCRIPT",password:"123"})
        }
        else
        {
            reject("ERROR,JS went wrong")
        }
    }, 1000)
})

async function consumePromiseFive(){
    try
    {
    const respnse=await promiseFIve
    console.log(respnse)
    }
    catch(error)
    {
        console.log(error)
    }
}

consumePromiseFive()



// async function getUsers(){
//     try
//     {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data)
//     }
//     catch(error)
//     {
//         console.log(error)
//     }
// }
// getUsers()


fetch('https://api.github.com/users/Azeem-Rajput')
.then((response)=>{
    return response.json()
} )
.then((data)=>{
    console.log(data)
})
.catch((error)=>
{
    console.log(error)
})