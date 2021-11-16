let gridColumns;
let gridItems;
const board = document.querySelector('.board');

function createDiv(gridColumns) {
    gridItems = gridColumns * gridColumns;
    for ( i =0 ; i < gridItems ; i++) {
        let newDiv = document.createElement('div');
        board.appendChild(newDiv);
    }
    board.style.gridTemplateColumns = `repeat(${gridColumns} , 1fr)`;
    newDivs = Array.from(document.querySelectorAll('.board>div'));
console.log(newDivs)

newDivs.forEach(div => div.addEventListener('mouseover', function(e) {
    div.style.backgroundColor = '#582F0E'
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



