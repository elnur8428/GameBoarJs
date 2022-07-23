const board = document.querySelector('#board')
const colors = ['#00FF00','#FF0000','#00FFFF','#008080','#FF00FF','#000080','#800080']
const SQUARES_NUMBER = 1000

for(let i = 0; i<SQUARES_NUMBER;i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    // square.addEventListener('mouseover', () => 
    // setColor(square))
    square.addEventListener('mouseover', setColor())


    // square.addEventListener('mouseleave', () => 
    // removeColor(square))
    square.addEventListener('mouseleave', removeColor())

    board.append(square)
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor ='#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
//    const index =  Math.floor(Math.random()*colors.
//    length)
//    return colors[index]
   return colors[ Math.floor(Math.random()*colors.
    length)]
}