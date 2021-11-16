let gridColumns = '64';
gridItems = gridColumns * gridColumns;

const board = document.querySelector('.board');
board.style.gridTemplateColumns = `repeat(${gridColumns} , 1fr)`;
function creatDiv(gridItems) {
    for ( i =0 ; i < gridItems ; i++) {
        let newDiv = document.createElement('div');
        board.appendChild(newDiv);
    }
}

creatDiv(gridItems);

const newDivs = Array.from(document.querySelectorAll('.board>div'));
console.log(newDivs)

newDivs.forEach(div => div.addEventListener('mouseover', function(e) {
    div.style.backgroundColor = '#582F0E'
}));

newDivs.forEach(div => div.addEventListener('touchstart', function(e) {
    div.style.backgroundColor = '#582F0E'
}));