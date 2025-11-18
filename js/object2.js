//++++++++++++++ singleton & object.create ++++++++++++++++
// const application=new Object()
const application={}
application.name="softs"
application.id="LQ20NDU82"
application.isLoggedin=false

// console.log(application)

const publish={
    publishing:{
        naming:"RAJPUT",
        publishment:{
            pass:123,
            machine:"qc2m"
        }
    }
}
// console.log(publish.publishing.publishment.pass)

const varie={1:"az",2:"da"}
const varie2={1:"zz",2:"dd"}

/*const varie3= Object.assign({},varie,varie2)*/ 
 // writing {} in object.assign() is better because insome cases in which many objects are forms like 3,4 than the all values are considered assign in first object in obj.ass()

 const varie3={...varie,...varie2}  //   (Easy and modern method)
// console.log(varie3) 

const aray=[
    {   
    },
    {            // also we use different objects in array
    }
]

// console.log(Object.keys(application))
// console.log(Object.values(application))
// console.log(Object.entries(application))

// console.log(application.hasOwnProperty('id'))


// ++++++++++++++++  object destructure  ++++++++++++++++++++

const course={
    courseInstructor:"Rajput",
    price:9292,
    code:2099
}
// console.log(course.code)
const {code:de}=course   // where curly brasis you see than understand that its a destructuring also in other lang. like react 
// console.log(code)
console.log(de)  // another method 

//   (API structure)

{
    name="azeem",
    course="youtube"
    feee=0
}

// (API also in array form)

[
    {},
    {}, 
    {}
]
// ( json = Java Script Object Notation)