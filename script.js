function boxPaint(){
    this.setAttribute('style', 'background-color:black'); //sets the box to black
}

function createSketch(gridSize = 16){

    const container = document.querySelector('#sketch-container');
    container.innerHTML = (''); //cleans any previous created grid, so it can create a new one when gridSizeChange invoked
    
    for (let i = 0; i < gridSize; i++){ //creates "x" number of columns
        for(let i = 0; i < gridSize; i++ ){
            if(i==0){ //create a single column where the "x" divs will be added
                var divColumn = document.createElement('div');
                divColumn.classList.add('column');
                container.appendChild(divColumn);
            }
            //creating and adding divs
            var div = document.createElement('div');
            div.classList.add('single-box');
            //div.textContent = (i); //adds number to box for understanding the positions
            div.addEventListener('mouseover',boxPaint);
            divColumn.appendChild(div);
        };
    };

    
};

function gridSizeChange(){
    const gridSize = prompt('Enter new grid size:');
    createSketch(gridSize);
}

const gridSize = document.querySelector('#grid-size');
gridSize.addEventListener('click', gridSizeChange);


createSketch();