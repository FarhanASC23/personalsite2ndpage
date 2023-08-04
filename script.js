// variables
let darkmode = document.getElementById('darkmode')
let lightmode = document.getElementById('lightmode')
let body = document.querySelector('body')
let div = document.querySelector('div')

//events
lightmode.addEventListener('click', lightpressed)
darkmode.addEventListener('click', darkpressed)

//functions
function darkpressed(){
    body.style.backgroundColor = '#18122B'
    div.style.backgroundColor = '#393053'
}

function lightpressed(){
    body.style.backgroundColor = 'white'
    div.style.backgroundColor = 'gray'
}