function calculatorView (model) {
    var buttons = {
        
    }
    var outerDiv = document.createElement("div");
    outerDiv.id = "outerDiv";
    
    var screenDiv = document.createElement("div");  
    screenDiv.id = "screenDiv";
    outerDiv.appendChild(screenDiv);

    var buttonDiv = document.createElement("div");
    buttonDiv.id = "buttonDiv";
    outerDiv.appendChild(buttonDiv);

    var gridDiv = document.createElement("div");
    gridDiv.class = "grid-container";
    gridDiv.style.display = "grid";
    gridDiv.style.gridTemplateColumns = "repeat(4, 1fr)";
    gridDiv.style.gridGap = "10px"; 

    for ( i = 0; i < 16; i++ ){
        var cell = document.createElement("div");
        cell.class = "grid-item";
        cell.innerHTML = i;
        gridDiv.appendChild(cell);
    }
    buttonDiv.appendChild(gridDiv);
    return outerDiv;
    
};  