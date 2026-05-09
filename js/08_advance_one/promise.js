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
        let error=false
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