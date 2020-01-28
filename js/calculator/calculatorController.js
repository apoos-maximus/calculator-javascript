function calculatorController () {
    var calc = new calculator();
    calc.Description = "Calculator";

    var calculatorElement = calculatorView(calc);
    return calculatorElement;
};

var cal1 = calculatorController();
document.body.appendChild(cal1);