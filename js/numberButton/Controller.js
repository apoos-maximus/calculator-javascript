// interface for button class - returns button dom element
function NumberButtonControl(id,value,options) {
    var numberButtonModel;
    var numberButtonView;

    var init = function (id, value, options) {
        numberButtonModel = new NumberButtonModel(id, value, options);
        var but = new NumberButtonView(numberButtonModel);
        numberButtonView = but.getNumberButtonElement();
    }

    init();
    return NumberButtonView;
};