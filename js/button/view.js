// builds button dom element
var ButtonView = function (model) {
    var buttonViewElement;
    var init = function() {
        createButtonElement();
    }
    createButtonElement = function() {
        buttonViewElement = document.createElement("button");
        buttonViewElement.innerHTML = model.value;
        buttonViewElement.style.width = model.options.width;
        buttonViewElement.style.height = model.options.height;
    }
    init();
    return buttonViewElement;
}
