// builds display dom element
var DisplayView = function (model) {
    var displayViewElement;

    var init = function () {
        displayViewElement = document.createElement("div");
        displayViewElement.className = model.options.containerClass;
        displayViewElement.style.width = model.options.width;
        displayViewElement.style.height = model.options.height;

        displaySubBox = document.createElement("div");
        displaySubBox.className = model.options.subContainerClass;
        displayViewElement.appendChild(displaySubBox);
        displaySubBox.innerHTML = model.expression;
    }

    init();
    return displayViewElement;
}; 