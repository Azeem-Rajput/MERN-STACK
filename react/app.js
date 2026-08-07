// attributes={
//     className:"element",
//     id:"first",
//     style:{
//       fontSize:"20px",backgroundColor:"green",color:"white"          ------- object
//            }
// }   

// element={
//     tag:h1,
//     textContent:
//     style:{fontSize:"20px",backgroundColor:"green",color:"white"}    
// }


// create h1 element

// const element1=document.createElement('h1')
// element1.className='element'
// element1.id='first'
// element1.textContent='Hello coder army(azeem rajput)'
// element1.style.backgroundColor='orange'
// element1.style.color='white'
// element1.style.fontSize='20px'


// const element2=document.createElement('h2')
// element2.className='element'
// element2.id='first'
// element2.textContent='There is begining of react'
// element2.style.backgroundColor='green'
// element2.style.color='white'
// element2.style.fontSize='20px'

// // custom React 
// const React={
//      createElement: function(tag,attributes,children)
// {
//     const element=document.createElement(tag);
//     element.textContent=children;
    
//     for (const key in attributes) {
//         if(key=='style')
//         {
//             Object.assign(element.style,attributes.style)
//         }
//         else
//         {
//             element[key]=attributes[key];
//         }
//     }
//     return element; 
// }
// }

// const ReactDOM={
//     render:function(child,parent)
//     {
//         parent.append(child);
//     }
// }


const element1=React.createElement("h1",{className:"element",id:"first",style:{fontSize:"20px",backgroundColor:"green",color:"white"}},"hello coder army (azeem rajput)")

const root=document.getElementById('root')
ReactDOM.render(element1,root)
