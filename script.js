class RobotGridState {
    constructor() {
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

        this.UP = 'UP';
        this.DOWN = 'DOWN';
        this.LEFT = 'LEFT';
        this.RIGHT = 'RIGHT';
        
        this.state = {
            grid: grid,
            x: 2,
            y: 2,
            rotation: this.DOWN
        };

        this.state.grid[2][2].classList.add('robot');
    }

    move() {
        let newX = this.state.x;
        let newY = this.state.y;
    
        switch(this.state.rotation) {
            case this.UP:
                if(this.state.y - 1 >= 0) {
                    newY -= 1;
                }
                break;
            case this.DOWN:
                if(this.state.y + 1 < 5) {
                    newY += 1;
                }
                break;
            case this.LEFT:
                if(this.state.x - 1 >= 0) {
                    newX -= 1;
                }
                break;
            case this.RIGHT:
                if(this.state.x + 1 < 5) {
                    newX += 1;
                }
                break;
        }
    
        Object.assign(this.state, {x: newX, y: newY});
        this.updateGrid();    
    }

    rotateLeft() {
        let newRotation = this.state.rotation;
    
        switch(this.state.rotation) {
            case this.UP:
                newRotation = this.LEFT;
                break;
            case this.DOWN:
                newRotation = this.RIGHT;
                break;
            case this.LEFT:
                newRotation = this.DOWN;
                break;
            case this.RIGHT:
                newRotation = this.UP;
                break;
        };
    
        Object.assign(this.state, {rotation: newRotation});
        this.updateGrid();
    }

    rotateRight() {
        let newRotation = this.state.rotation;
    
        switch(this.state.rotation) {
            case this.UP:
                newRotation = this.RIGHT;
                break;
            case this.DOWN:
                newRotation = this.LEFT;
                break;
            case this.LEFT:
                newRotation = this.UP;
                break;
            case this.RIGHT:
                newRotation = this.DOWN;
                break;
        };
    
        Object.assign(this.state, {rotation: newRotation});  
        this.updateGrid(); 
    }

    updateGrid() {
        document.querySelector('.robot').classList.remove('robot','up','down','left','right');
        this.state.grid[this.state.y][this.state.x].classList.add('robot',this.state.rotation.toLowerCase());
    }
}

let state = new RobotGridState();

document.getElementById('move').onclick = () => {
    state.move();
};

document.getElementById('rotateLeft').onclick = () => {
    state.rotateLeft();
};

document.getElementById('rotateRight').onclick = () => {
    state.rotateRight();
};