function createSketch(){

    const container = document.querySelector('#sketch-container');
    
    for (let i = 0; i < 16; i++){
        for(let i = 0; i < 16; i++ ){
            if(i==0){ //creates column where the the div will be added
                var divColumn = document.createElement('div');
                divColumn.classList.add('column');
                container.appendChild(divColumn);
            }
            //creating and adding divs
            var div = document.createElement('div');
            div.classList.add('single-box');
            div.textContent = (i);
            divColumn.appendChild(div)
        };
    };

    
};

createSketch();