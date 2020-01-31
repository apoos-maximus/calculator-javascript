
var show_calc = function (num) {
    var opt = {};
    for (var i = 0; i<num; i++) {

        var cent = document.createElement("center");
        cent.style.padding = "16px";

        var calc = new CalculatorController("apcalc",opt);
        cent.appendChild(calc.getCalculatorElement());

        document.body.appendChild (cent);

        console.log(eval("1+2-4/2"));

    }
}
