function CalculatorController (heading,options) {
    var calculatorModel;
    var calculatorView;

    var init = function () {
        calculatorModel = new CalculatorModel (heading,options);
        generateButtons();
//        console.log(calculatorModel.domNumberButtons);
        generateScreen();
        calculatorView = new CalculatorView (calculatorModel);
    }

    var generateButtons = function () {
        generateNumberButtons();
        generateOperatorButtons();
        generateGeneralButtons();
    }
    var generateNumberButtons = function () {
        var options = { };
        for ( button in calculatorModel.numberButtons ) {
//            console.log(calculatorModel.numberButtons[button]);
            var but1 = new NumberButtonControl(calculatorModel.numberButtons[button], calculatorModel.numberButtons[button], options);
            console.log(but1.getNumberButtonElement());
            calculatorModel.domNumberButtons.push ( but1.getNumberButtonElement() );
        }
    }

    var generateOperatorButtons = function () {
        var options = { };
        console.log("apoorv");
        for ( button in calculatorModel.operatorButtons ) {
           var but1 = new OperatorButtonControl(calculatorModel.operatorButtons[button], calculatorModel.operatorButtons[button], options);
           console.log(but1.getOperatorButtonView());
           calculatorModel.domNumberButtons.push ( but1.getOperatorButtonElement() );
        }
    }

    var generateGeneralButtons = function () {

    }

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