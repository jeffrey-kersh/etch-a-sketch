//Instructions --> https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/etch-a-sketch-project

//Step 1 - Create a 16 x 16 grid of square divs using js
    //grid-column-start: #; & grid-column-end: #;

//Function Definitions

function create_grid(numRows, numCols) {
    
    for (i=0; i < numRows; i++) {
    
        for(j=0; j < numCols; j++) {
            //adjust css property to set column num?
            document.getElementsByClassName("grid-container").appendChild(div);
            console.log("Div Created");
        }
    }

    return;
}











//Main
//event listener - run when page is loaded

window.onload = create_grid(16, 16);
console.log("Grid Created");
