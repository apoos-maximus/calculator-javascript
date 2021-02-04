function CalculatorController (heading,options) {
    var calculatorModel;
    var calculatorView;
    var screenControl;
    this.lastResult = "";
    scope = this;

    var init = function () {
        calculatorModel = new CalculatorModel (heading,options);
        generateScreen();
        generateButtons();
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
        for ( button in calculatorModel.numberButtons ) {
            var but1 = new NumberButtonControl(calculatorModel.numberButtons[button], calculatorModel.numberButtons[button], options);
            but1.onclickHandler = function (id,value) {
                  screenControl.addToExpression(value);
//                console.log (id,value);
            }
            calculatorModel.domButtons[calculatorModel.numberButtons[button]] =  but1.getButtonElement() ;
        }
    }

    var generateOperatorButtons = function () {
        var options = { };
        for ( button in calculatorModel.operatorButtons ) {
           var but1 = new OperatorButtonControl(calculatorModel.operatorButtons[button], calculatorModel.operatorButtons[button], options);
           but1.onclickHandler = function (id,value) {
//                console.log (id , value);
                  if ( value == "=" ) {
                    screenControl.setExpression(eval(screenControl.getExpression()));
                  }
                  else {
                    if (value == "X") screenControl.addToExpression("*");
                    else {
                        screenControl.addToExpression(value);
                    }

                  }

           }
           calculatorModel.domButtons[calculatorModel.operatorButtons[button]] = but1.getButtonElement();
        }
    }

    var generateGeneralButtons = function () {
        var options = { }, gbc;
        for (var i =0; i< calculatorModel.generalButtons.length;i++ ) {
            gbc = new ButtonController(calculatorModel.generalButtons[i], calculatorModel.generalButtons[i], options);
            gbc.onclickHandler = function(id,value) {
//                console.log (id , value, "from", calculatorModel.heading);
                  if (value == "ON/OFF") {
                    if(screenControl.state == "ON") screenControl.state = "OFF";
                        else {
                            screenControl.state = "ON";
                        }
                  }
                  else if ( value == "C" ) {
                    screenControl.setExpression("");
                  }
                  else if (value == "LR") {
                    screenControl.setExpression(scope.lastResult);
                  }
                  else {
                    scope.lastResult = "";
                    screenControl.setExpression("");
                  }
            }
            calculatorModel.domButtons[calculatorModel.generalButtons[i]] = gbc.getButtonElement() ;
        }
    }

    var generateScreen = function () {
         screenControl = new DisplayControl();
         calculatorModel.screen.push(screenControl.getDisplayElement());
    }

    this.getCalculatorElement=function() {
        return calculatorView;
    }

    init();
    return this;
}