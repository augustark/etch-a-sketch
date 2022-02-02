const gridEl = document.querySelector("#grid")
const btn = document.querySelector("button")

const defaultSize = 5

btn.addEventListener('click', function() {
    let input = prompt("Enter Number")
    if (input > 100) {
      input = parseInt(prompt("Enter a number lower than 100"))
    } else if (isNaN(input)) {
      input = parseInt(prompt("Enter a valid number"))
    } else if (!input){
        input = defaultSize
    }
    gridEl.innerHTML = ''
    createGrid(input)
})

function createGrid(num) {
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            const pixel = document.createElement('div')
            pixel.addEventListener('mouseenter', function() {
                pixel.classList.add("color")
            })
            gridEl.append(pixel)
        }
    }
    gridEl.style.gridTemplate = `repeat(${num}, 1fr)/repeat(${num}, 1fr)`;
}

createGrid(defaultSize)