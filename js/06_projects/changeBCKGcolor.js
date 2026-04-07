const buttons=document.querySelectorAll('.button')
buttons.forEach(function(btn){
  console.log(btn)
  btn.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target)
    switch(e.target.id)
    {
      case(e.target.id):
      document.body.style.backgroundColor=e.target.id
    }
  })
})