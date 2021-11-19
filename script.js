const board = document.querySelector('.board');
const colorButtons = document.querySelectorAll('.color-btns');
const colorPicker = document.getElementById('color-input');
const clearButton = document.querySelector('.clear');
let color = '#582F0E'

function createGrid (columns) {
    let gridItems = columns * columns;
    for (i = 0 ; i < gridItems ; i++) {
        let newDiv = document.createElement('div');
        board.appendChild(newDiv);
    }
    board.style.gridTemplateColumns = `repeat(${columns}, 1fr)`

    let newDivs = board.querySelectorAll('div');
    newDivs.forEach(div => div.addEventListener('mouseover', paint))
};
createGrid('32');



function paint() {
    switch (color) {
        case 'rainbow':
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            break;
        case 'shadow': 
            if(this.style.backgroundColor.slice(0,4) === 'rgba') {
                let currentOpacity = Number(this.style.backgroundColor.slice(-4,-1));
                if (currentOpacity <= 0.9) {
                    this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
                } 
            } else {
                this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
            }
            break;
        case 'eraser':
            this.style.backgroundColor= '#fff';
            break;
        default:
            this.style.backgroundColor = color;
            break;
    }
}

//color picker
colorPicker.oninput = function(e) {
    color = e.target.value;
}

// Updates color variable when a color button is clicked
function changeColor(event) {
    switch (event.target.dataset.color) { 
        case 'rainbow':
            color = 'rainbow';
            break;  
        case 'eraser':
            color = 'eraser';
            break;
        case 'shadow':
            color = 'shadow';
            break;
        default:
            color = colorPicker.value;
            break;
    } 
}

//remove all created divs
function removeDivs () {
    newDivs = Array.from(document.querySelectorAll('.board>div'));
    newDivs.forEach(div => div.remove())
}
// SLIDER SETTINGS
const slider = document.getElementById('grid-slider')
const sliderSpan = document.getElementById('slider-span')
sliderSpan.textContent = slider.value + "*" + slider.value;
slider.oninput = function() {
    removeDivs();
    sliderSpan.textContent = slider.value + "*" + slider.value;
    gridColumns = slider.value;
    createGrid(gridColumns);
}

//clear button
function clearGrid () {
    let newDivs = board.querySelectorAll('div');
    newDivs.forEach(div => div.style.backgroundColor = '#fff');
}



//other event listeners
clearButton.addEventListener('click', clearGrid);
colorButtons.forEach(colorButton => colorButton.addEventListener('click', changeColor));
