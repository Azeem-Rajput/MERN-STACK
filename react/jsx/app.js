// jsx=javascript xml (babel)
//<h1>hello for coding </h1>  ------> React.createElement('h1',{id:'title'},'hello coder')

// import React from "react"

// const element=<h1 id="title" className="first">hello for coding class</h1>

// const element2=(<div>
//         <h1>hello</h1>
//         <h2>coder kkkk</h2>
//     </div>)

// React.createElement('div',null,
// createElement('h1',null,'helloo bhaii',
// createElement('div',null,'coder')))

// React.createElement('h1',null,helloo bhaii)
// React.createElement('h2',null,coder)


// const element3=( <div>
//     <h1>helloo bhaii</h1>
//     <h2>coder</h2>
//     </div>
// )

// React component----->returns jsx 
// function App(name)
// {
//     return(
//         <h1>Hello coder armyy {10+29}</h1>
//     )
// }
// const a=App("Azeem")

// text/element: javascript ka expression aap isky andar likh sakty hay
// number,string,array
//true,false,undefined,null(render tou ho ga leikin print kuch nai ho ga)
//object:error


// const age=10
// const isLoggedIn=true
// const element=<h1>helloooo coooderrr {isLoggedIn?<h1>You logged in</h1>:<h1>'KID'</h1>}</h1>


// const languages=['HTML','CSS','javascript','react']
// const element=(
//     <ul>
//         {languages.map(languages=><li>{languages}</li>)}
//     </ul>    
// )
// const element=<h1 id="elemnt" className="first" style={{backgroundColor:"orange", color:"green"}}>helloo bhai coder</h1> 
// function App(props)
// {
//     return(
//         <h1>helloo bhai coder {props.name} {props.age}</h1>
//     )
// }
// const element=<App name='azeem' age={11}></App>



function Header({name})                                                  // const props={
                                                                         //                name:'AZEEM'    }
{                                                                        // const {name}=props
    return(
        <h1>{name} Welcome to pakistan election commision </h1>
    )
}
function Main({user})
{
    return(
        <>
        <h2>below is our information</h2>
        <p>Hi {user.name}</p>
        <p>{user.age>18?'you are eligible for vote':'you are not eligible for vote'}</p>
        <p>You are belongs to {user.city}</p>
        </>
    )
}
function Footer()
{
    return(
        <h1>THANKS for visiting</h1>
    )
}

function App()
{
    return(
        <>
        <Header name='AZEEM'></Header>
        <Main user={{name:"AZEEM",age:18,city:"lahore"}}></Main>
        <Footer></Footer>
        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'))

// root.render(element3)   
root.render(<App></App>)   // (<App/>)
