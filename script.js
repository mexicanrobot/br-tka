function initGrid() {
    let gridElement = document.querySelector('.grid');
    let grid = [];
    for(let i=0; i < 5; i++) {
        let row = [];
        for(let j=0; j < 5; j++) {
            let square = document.createElement('div');
            square.classList.add('grid__square');
            gridElement.appendChild(square);
            row.push(square);
        }
        grid.push(row);
    }
    return {
        grid: grid,
        x: 2,
        y: 2,
        rotation: "DOWN"
    };
}

const UP = "UP";
const DOWN = "DOWN";
const LEFT = "LEFT";
const RIGHT = "RIGHT";
var state = initGrid();
state.grid[2][2].classList.add('robot');
console.log(state);