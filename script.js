let gridColumns;
let gridItems;
const board = document.querySelector('.board');
let paintColor = '#582F0E'

//color input
colorInput = document.getElementById('color-input');
colorInput.oninput = function () {
    paintColor = this.value;
    paint(paintColor)
}

colorInput.addEventListener('click', function () {
    paintColor = this.value;
    paint(paintColor)
})

//create divs
function createDiv(gridColumns) {
    gridItems = gridColumns * gridColumns;
    for ( i =0 ; i < gridItems ; i++) {
        let newDiv = document.createElement('div');
        board.appendChild(newDiv);
    }
    board.style.gridTemplateColumns = `repeat(${gridColumns} , 1fr)`;
    
    paint(paintColor);
}

//paint divs
function paint (paintColor) {
    newDivs = Array.from(document.querySelectorAll('.board>div'));
    newDivs.forEach(div => div.addEventListener('mouseover', function() {
        div.style.backgroundColor = paintColor;
    }));
}


createDiv('32');

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
    createDiv(gridColumns);
}

//clear button function

function clearBoard() {
    const divs = Array.from(document.querySelectorAll('.board>div'));
    divs.forEach(div => div.style.backgroundColor = '#fff')
    paintColor = colorInput.value;
}

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click' , clearBoard);

//eraser button 
const eraserBtn = document.querySelector('.eraser');
eraserBtn.addEventListener('click', function() {
    paint('#fff')
});

//rainbow button
function generateColor () {
    return 'rgba(' + Math.floor(Math.random() * 255) +',' + Math.floor(Math.random() * 255) + ',' +Math.floor(Math.random() * 255) +')';
}

const rainbowBtn = document.querySelector('.rainbow');
rainbowBtn.addEventListener('click', function() {
    newDivs = Array.from(document.querySelectorAll('.board>div'));
    newDivs.forEach(div => div.addEventListener('mouseover', function() {
        div.style.backgroundColor = generateColor();
    }));
})

//shadow button


const shadowBtn = document.querySelector('.shadow');
shadowBtn.addEventListener('click', function() {
    
    newDivs = Array.from(document.querySelectorAll('.board>div'));
    newDivs.forEach(div => div.addEventListener('mouseover', function() {
        paint('gray')
    }));

})