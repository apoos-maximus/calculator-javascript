function calculatorView (model,domButtons,Screen) {
    
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

    for ( domButton in domButtons ) {
        // gridDiv.appendChild(domButton[1]);
        gridDiv.appendChild (domButtons[domButton] ) ;
    }
    
    buttonDiv.appendChild(gridDiv);
    return outerDiv;
    
};  