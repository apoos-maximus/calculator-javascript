// interface for button class - returns button dom element
function NumberButtonControl(id,value,options) {
//    console.log(id + " " + value);
    var numberButtonModel;
    var numberButtonView;

    var init = function (id, value, options) {
//        console.log(id + " " + value);
        numberButtonModel = new NumberButtonModel(id, value, options);
        var but = new NumberButtonView(numberButtonModel);
        numberButtonView = but.getNumberButtonElement();
    }

     this.getNumberButtonElement = function () {
            return numberButtonView;
        }

    init(id,value,options);

    return this;
};