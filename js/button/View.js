// builds button dom element
var ButtonView = function (model) {
    var buttonViewElement;
    var init = function() {
        createButtonElement();
    }
    createButtonElement = function() {
        buttonViewElement = document.createElement("div");
        buttonViewElement.className = model.options.buttonClass;
        buttonViewElement.id = model.id;
        buttonViewElement.innerHTML = model.value;
    }
    this.getButtonElement = function () {
            return buttonViewElement;
        }
    init();

    return this;
};
