//builds numberButton dom element
function NumberButtonView(model) {
  var numberButtonElement;

  var init = function () {
    createNumberButtonElement();

  }

  var createNumberButtonElement = function () {
    numberButtonElement = document.createElement("button");
    numberButtonElement.id = model.id;
    numberButtonElement.className = model.options.buttonClass;
    numberButtonElement.innerHTML = model.value;

  }
  this.getNumberButtonElement = function (){
    return numberButtonElement;
  }
  init();
  return this;
}