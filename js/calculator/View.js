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

    }


    init();
    return calculatorViewElement;
};  