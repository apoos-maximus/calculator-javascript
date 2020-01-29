//builds operator button dom element
 var OperatorButtonView = function (model) {
    var operatorButtonElement;

    var init = function () {
        createButtonElement();
    }
    var createButtonElement = function (model) {
        operatorButtonElement = document.createElement("button");
        operatorButtonElement.id = model.id;
        operatorButtonElement.innerHTML = model.value;
        operatorButtonElement.className = model.options.buttonClass;
    }
    init();
    return this;
};