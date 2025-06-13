let container = document.querySelector('.container')
let sizeBtn = document.querySelector('#sizeBtn')
let sizeInput = document.querySelector('#size')
let n = 50
let hoverCounter = 1
let color = ""

function getRandom( max){
    return Math.floor(Math.random() *(max - 1) + 1)
}

// creates grid trough function createGrid() on load
document.onload = createGrid(n)

function createGrid(n) {
    for (let i = 0; i < n; i++) {
        let row = document.createElement('div')
        row.className = 'row '
        for (let j = 0; j < n; j++) {
            let box = document.createElement('div')
            box.className = 'box '
            box.style.border = '1px solid  white'
            box.style.backgroundColor = 'white'
            

            box.addEventListener('mouseover', function(e) {
                color = getRandom(255)+', '+getRandom(255)+', '+getRandom(255)+''
                if(e.buttons == 1){
                    if(hoverCounter <= 10){
                    e.target.style.backgroundColor = 'rgb('+color+')'
                    hoverCounter++
                    
                    }else{
                        hoverCounter = 1
                    }
                    e.target.style.border = '1px solid rgba('+color+', '+hoverCounter/10+')'
                }
                e.target.addEventListener('mouseenter', selectedOn)
                e.target.addEventListener('mouseleave', selectedOff)
            })
            
            // box.addEventListener('mouseover')

            row.appendChild(box)
        }
        container.appendChild(row)
    }
}

function selectedOn(event){
    event.target.style.border = "1px black solid "
    // console.log("selected on : "+event.target.border);
    

}

function selectedOff(event){
    console.log(event.target.style.backgroundColor);
    if(event.target.style.backgroundColor != 'white'){    
        event.target.style.border = '1px solid rgba('+color+')'
        // console.log("selected off : "+event.target.border);
        return
    }
    event.target.style.border = '1px solid white'
}





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




