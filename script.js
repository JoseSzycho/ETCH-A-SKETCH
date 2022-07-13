function boxPaint(){
    if(boxBackground == 'rgb'){
        this.style.backgroundColor = 'blue';
        var o = Math.round, r = Math.random, s = 255;
        this.style.backgroundColor = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    };

    if(boxBackground == 'black'){
        this.style.backgroundColor = 'black';
    };
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
    
    let gridSize;
    do{
        gridSize = +prompt('Set new grid size:');
        console.log(typeof(gridSize));
    }while(gridSize > 100 || gridSize < 1);
    createSketch(gridSize);
}

function changeBoxColor(){
    
    const boxColor = document.querySelector('#box-color');
    
    if(boxBackground == 'black'){
        boxBackground = 'rgb';
        boxColor.textContent = 'Change color to black';
        
    }else if(boxBackground == 'rgb'){
        boxBackground = 'black';
        boxColor.textContent = 'Change color to "rgb"';  
    }
}

const gridSize = document.querySelector('#grid-size');
gridSize.addEventListener('click', gridSizeChange);

let boxBackground = "black";
const boxColor = document.querySelector('#box-color');
boxColor.addEventListener('click', changeBoxColor);

createSketch();