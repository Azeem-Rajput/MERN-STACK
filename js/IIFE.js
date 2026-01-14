//   Immediately Invoked Function Expression (IIFE)
    // " IIFE is used for avoidens of global varibles which are located in global scope in some functions which are used"  
 // "used for avoid pollution of global scope"

// 1. 
function chaye(){
    console.log("HEy najadakd")
}chaye();     // semicolon is necessary at the end of every function to run next function in IIFE



// 2.
(function chaye(){
    // named IIFE
    console.log("HEy najadakd")           // ()() "the first bracket is for 'function defining'  and the secand bracket is for function call  "
})();    // semicolon is necessary at the end of every function to run next function in IIFE


//3.
( (name)=>{
    //un-named IIFE
    console.log(`${name} Arm Wrestler`)
}) ('Azeem Rajput')

 // write two IIFE with the help of semicolon(;)