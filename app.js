let addRed = document.querySelector('.add-red')
let addBlue = document.querySelector('.add-blue')
let title = document.querySelector('.title')

function redFunc() {
    title.style.color = 'red'
}

function blueFunc() {
    title.style.color = 'blue'
}



addRed.addEventListener('click', redFunc)
addBlue.addEventListener('click', blueFunc)
