let randomNumber=parseInt(Math.random()*100+1)

const userInput=document.querySelector('#guessField')
const submit=document.querySelector('#subt')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame=true

if(playGame)
{

  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
    
  })

}

function validateGuess(guess)
{
  if(isNaN(guess))
  {
    alert('Please enter a valid number')
  }
  else if(guess<1)
  {
    alert('Please enter a number greater than 1')
  }
  else if(guess>100)
  {
    alert('Please enter a number less than hundred')
  }

  else
  {
    prevGuess.push(guess)
    if(numGuess==11)
    {
      displayGuess(guess)
      displayMessage(`Game Over and random number is ${randomNumber}`)
      endGame()
    }
    else
    {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess)   // Value higher or lower
{
  if(guess==randomNumber)
  {
    displayMessage(`You guessed it`)
  }
  else if(guess<randomNumber)
  {
    displayMessage(`Your guess is tooo smaller`)
  }
  else if(guess>randomNumber)
  {
    displayMessage(`Your guess is tooo bigger`)
  }
}

function displayGuess(guess)
{
  userInput.value=''
  guessSlot.innerHTML+=`${guess},`
  numGuess++
  remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message)
{
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame()
{
  userInput.value=''
  userInput.setAttribute('disable','')
  p.classList.add('button')
  p.innerHTML=`<h2 id='newGame'>Start new game</h2>`
  startOver.appendChild(p)
  playGame=false
  newGame()
}

function newGame()
{
  const startNewgame=document.querySelector('#newGame')
  startNewgame.addEventListener('click',function(e)
  {
    randomNumber=parseInt(Math.random()*100+1)
    userInput.removeAttribute('disable')
    guessSlot.innerHTML=''
    numGuess=1
    remaining.innerHTML=`${11-numGuess}`
    startOver.removeChild(p)
    playGame=true

  })
}