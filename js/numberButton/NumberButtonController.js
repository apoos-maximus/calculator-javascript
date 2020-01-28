// interface for button class - returns button dom element
function numberButtonControl(specifics) {
    var numberButon = new numberButton();
    numberButon.Label = specifics.label;
    numberButon.Type = "numeric";

    numberButonElement = numberButtonView(numberButon);

    return numberButonElement;
};