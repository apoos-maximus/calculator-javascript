function calculatorController () {
    var calc = new calculator();
    calc.Description = "Calculator";

    var buttons = {
        "C" : "button", "AC" : "button", "LR" : "button", "ON/OFF" : "button",
        "1" : "numberButton", "2" : "numberButton", "3" : "numberButton", "/" : "operatorButton",
        "4" : "numberButton", "5" : "numberButton", "6" : "numberButton", "X" : "operatorButton",
        "7" : "numberButton", "8" : "numberButton", "9" : "numberButton", "-" : "operatorButton",
        "." : "operatorButton", "0" : "numberButton", "=" : "operatorButton", "+" : "operatorButton"
    };
    domButtons = [];

    for ( button in buttons ) {
        var cell = document.createElement("div");
        cell.class = "grid-item";
        
        if ( buttons[button] == "button" ) {
            var a = buttonControl( { label : button } );
            domButtons.push(a);       
        }
        if ( buttons[button] == "numberButton" ) {
            var a = numberButtonControl( { label : button } );
            domButtons.push(a);
        }
        if ( buttons[button] == "operatorButton" ) {
            var a = operatorButtonControl( { label : button } );
            domButtons.push(a);
        }
        // console.log(button + " : " + buttons[button]);
    }


    var calculatorElement = calculatorView(calc,domButtons,screen);
    return calculatorElement;
};

var cal1 = calculatorController();
document.body.appendChild(cal1);