function CalculatorView (model) {
    var calculatorViewElement;
    var init = function () {
        createCalculatorDiv();
        insertScreenDiv();
        insertButtonDiv();
    }
    var createCalculatorDiv = function () {
        calculatorViewElement = document.createElement("div");
        calculatorViewElement.id = model.heading;
        calculatorViewElement.className = model.options.containerClass;
    }

    var insertScreenDiv = function () {
        calculatorViewElement.appendChild(model.screen[0]);
    }

    var insertButtonDiv = function () {
        var buttonDiv = document.createElement("div");
        buttonDiv.id = "buttonDiv";
        buttonDiv.className = model.options.containerClass;
        calculatorViewElement.appendChild(buttonDiv);

        var row1 = document.createElement("div");
        row1.id = "Row 1";
        row1.className = model.options.row1Class;
        buttonDiv.appendChild(row1);

    }


    init();
    return calculatorViewElement;
};  