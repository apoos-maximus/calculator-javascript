// interface for operator button - returns operator button dom element
function operatorButtonControl(specifics) {
    var operatorButon = new operatorButton();
    operatorButon.Label = specifics.label;
    operatorButon.Type = "operator";

    var operatorButonElement = operatorButtonView(operatorButon);
    return operatorButonElement;
};