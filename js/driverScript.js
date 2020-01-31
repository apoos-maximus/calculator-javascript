var opt = {};

for (var i = 0; i<3; i++) {
    var calc = new CalculatorController("apcalc",opt);
    document.body.appendChild(calc.getCalculatorElement());

}

//var sr = {};
//sr["apoorv"] = "lotus";
//console.log(sr);