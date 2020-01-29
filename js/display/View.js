// builds display dom element
function DisplayView (model) {
    var displayViewElement;

    var init = function () {
        displayViewElement = document.createElement("div");
        displayViewElement.className = model.options.containerClass;
        displaySubBox = document.createElement("div");
        displaySubBox.className = model.options.subContainerClass;
        displayViewElement.appendChild(displaySubBox);
        displaySubBox.innerHTML = model.expression;
    }

    init();
    return displayViewElement;
}; 