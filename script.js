let container = document.querySelector('.container')
let sizeBtn = document.querySelector('#sizeBtn')
let sizeInput = document.querySelector('#size')
let n = 50
let hoverCounter = 1

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
            box.addEventListener('mouseover', function(e) {
                if(hoverCounter <= 10){
                    e.target.style.backgroundColor = 'rgba('+getRandom(255)+', '+getRandom(255)+', '+getRandom(255)+', '+(hoverCounter/10)+')'
                    hoverCounter++
                }else{
                    hoverCounter = 1
                }
            })
            row.appendChild(box)
        }
        container.appendChild(row)
    }
}
function getRandom( max){
    return Math.random() *(max - 1) + 1
}



// in work
function clearContainer(){
    let rows = document.querySelectorAll('.row')
    for(let i = 0;i < rows.length ; i++){
        rows[i].remove()
    }
    
}




function handleSizeClick() {
    const sizeOfGrid = parseInt(sizeInput.value);
    if(isNaN(sizeOfGrid)) {
        alert('input cant be empty')
    } else {
        if(sizeOfGrid > 100){
            alert('max size is 100')
            
        }
        else{
            clearContainer()
            createGrid(sizeOfGrid)
        }
        sizeInput.value = ''
    }
    
}


sizeBtn.addEventListener('click',handleSizeClick)

// makes boxes change color on hover





