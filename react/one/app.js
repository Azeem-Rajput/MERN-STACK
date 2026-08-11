// attributes={
//     className:"element",
//     id:"first",
//     style:{
//       fontSize:"20px",backgroundColor:"green",color:"white"          ------- object
//            }
// }   

const { createElement } = require("react")

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



// original react
const React={    
    createElement: function(type,props,children)
    {
        return{
            type:type,
            props:{
                ...props,
                children:children
            }
        }
    }
}

// const reactElement={
//     type:'h1',
//     props:{
//         className:"element",
//         id:"first",
//         style:{fontSize:"20px",backgroundColor:"green",color:"white"},
//         children:"hello coder army (azeem rajput)"
//     }
// }

const ReactDOM={
    render:function(reactElement,root)
    {
        const element=document.createElement(reactElement.type);
        
        const {props}=reactElement;

        for(const key in props)
        {
            if(key==style)
            {
            Object.assign(element.style,props.style)
            }
            else if(key ==children)
            {
                element.textContent=props[key]
            }
            else
            {
                element[key]=props[key]
            }
        }
        root.append(element); 


    }
}

const element1=React.createElement("h1",{className:"element",id:"first",style:{fontSize:"20px",backgroundColor:"green",color:"white"}},"hello coder army (azeem rajput)")
const element2=React.createElement("h2",{className:"element",id:"secand",style:{fontSize:"20px",backgroundColor:"orange",color:"white"}},"start react (azeem rajput)")

console.log(element1)
// ReactDOM.render(element1,document.getElementById('root'));

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(div);


// const root=document.getElementById('root')
// // ReactDOM.render(element1,root)
// ReactDOM.render(element2,root)
