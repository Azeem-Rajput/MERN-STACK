//_____________________ for of(loop)_______________________

// ["", "", ""]
// [{}, {}, {}]

const av=[1,2,3,4,5]
for (const i of av) {
//    console.log(i)  
}



const va=['hello world']
for (const i of va) {
   // console.log(i)
}




const greeting='hello guys'
for (const i of greeting) {
  //  console.log(i)
}



// map ( ye unique values rakhta ha oor hum jis order me enter krty hay isi order me values dikhata ha)

const map=new Map()
map.set('UK',"United kingdom")
map.set('USA',"United State Of America")
map.set('KSA',"Kingdom Of Saudia Arabia")
map.set('UK',"United kingdom")
 
// console.log(map)

for (const key of map) {
  // console.log(key)
}


for (const [key,value] of map) {
  // console.log(key,':-',value)
}


// is it also for objects..? now try....

const myobj={
  f:'false',
  t:'true'
}

for (const [key,value] of myobj) {
  console.log(key,":-",value)
}

// so, (for of) loop is not working on objects it only works on map 