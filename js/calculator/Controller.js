function CalculatorController (heading,options) {
    var calculatorModel;
    var calculatorView;

    var init = function () {
        calculatorModel = new CalculatorModel (heading,options);
        generateButtons();
//        console.log(calculatorModel.domNumberButtons);
        generateScreen();
        var cv =  new CalculatorView (calculatorModel);
         calculatorView = cv.getCalculatorView();
    }

    var generateButtons = function () {
        generateNumberButtons();
        generateOperatorButtons();
        generateGeneralButtons();
    }
    var generateNumberButtons = function () {
        var options = { };
        console.log(calculatorModel.numberButtons);
        for ( button in calculatorModel.numberButtons ) {
            var but1 = new NumberButtonControl(calculatorModel.numberButtons[button], calculatorModel.numberButtons[button], options);
            calculatorModel.domButtons[calculatorModel.numberButtons[button]] =  but1.getNumberButtonElement() ;
        }
    }

    var generateOperatorButtons = function () {
        var options = { };
        for ( button in calculatorModel.operatorButtons ) {
           var but1 = new OperatorButtonControl(calculatorModel.operatorButtons[button], calculatorModel.operatorButtons[button], options);
           calculatorModel.domButtons[calculatorModel.operatorButtons[button]] = but1.getOperatorButtonView();
        }
    }

    var generateGeneralButtons = function () {
        var options = { }, gbc;
        for (var i =0; i< calculatorModel.generalButtons.length;i++ ) {
            gbc = new ButtonController(calculatorModel.generalButtons[i], calculatorModel.generalButtons[i], options);
            gbc.onClickHandler = function(event, id, value) {
                alert(id, value);
            }
            calculatorModel.domButtons[calculatorModel.generalButtons[i]] = gbc.getButtonElement() ;
        }
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