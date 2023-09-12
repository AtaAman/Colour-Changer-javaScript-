const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const text = document.querySelector('h1')
const texts = document.querySelector('h2')

buttons.forEach((button)=>{
  button.addEventListener('click',function(e){
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
      text.style.color = 'white'
      texts.style.color = 'white'
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
      text.style.color = 'black'
      texts.style.color = 'black'
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
      text.style.color = 'red'
      texts.style.color = 'red'
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
      text.style.color = 'green'
      texts.style.color = 'green'
    }
  })
})