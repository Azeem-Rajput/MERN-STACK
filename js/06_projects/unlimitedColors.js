// firstly get random color
const randomColor=function(){
  const hex='0123456789ABCDEF'
  let color='#'
  for(let i=0;i<6;i++)
  {
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color;
}
let chh;
const startChanging=function(){
chh=setInterval(change,1000)
function change(){
  document. body.style.backgroundColor=randomColor()
}
}
const stopChanging=function(){
  clearInterval(chh)
  chh=null
}

document.querySelector('#start').addEventListener('click',startChanging)
document.querySelector('#stop').addEventListener('click',stopChanging)