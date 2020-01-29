function CalculatorController (heading,options) {
    var calculatorModel;
    var calculatorView;

    var init = function () {
        calculatorModel = new CalculatorModel (heading,options);
//      generateButtons();
        generateScreen();
        calculatorView = new CalculatorView (calculatorModel);
    }

//    var generateButtons = function () {
//
//    }

    var generateScreen = function () {
        var sc = new DisplayControl();
        calculatorModel.screen.push(sc.getDisplayElement());
    }
    this.getCalculatorElement=function() {
        return calculatorView;
    }

    init();
    return this;
};