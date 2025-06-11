let container = document.querySelector('.container')
let sizeBtn = document.querySelector('#sizeBtn')
let sizeInput = document.querySelector('#size')
let n = 16


// creates grid trough function createGrid() on load
document.onload = createGrid(n)

function createGrid(n) {
    for (let i = 0; i < n; i++) {
        let row = document.createElement('div')
        row.className = 'row '
        for (let j = 0; j < n; j++) {
            let box = document.createElement('div')
            box.className = 'box '
            box.textContent
            row.appendChild(box)
        }
        container.appendChild(row)
    }
}


// in work
function clearContainer(){
    let rows = document.querySelectorAll('.row')
    let rowsArray = Array.from(rows)
    rowsArray.map(function(pixel){
    pixel.addEventListener('mouseover', function(e){
        e.target.remove()
    })
})
}




function handleSizeClick() {
    const sizeOfGrid = parseInt(sizeInput.value);
    if(isNaN(sizeOfGrid)) {
        alert('input cant be empty')
    } else {
        if(sizeOfGrid > 100)alert('max size is 100')
        else{
            
        }
    }
    
}


sizeBtn.addEventListener('click',handleSizeClick)

// makes boxes change color on hover

let boxes = document.querySelectorAll('.box')
let boxesArray = Array.from(boxes)
boxesArray.map(function(pixel){
    pixel.addEventListener('mouseover', function(e){
        e.target.className ="box hovered"
    })
})



