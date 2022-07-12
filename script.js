function boxPaint(){
    this.setAttribute('style', 'background-color:black'); //sets the box to black
}

function createSketch(){

    const container = document.querySelector('#sketch-container');
    
    for (let i = 0; i < 16; i++){ //creates "x" number of columns
        for(let i = 0; i < 16; i++ ){
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

createSketch();