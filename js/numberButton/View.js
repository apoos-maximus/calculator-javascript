//builds numberButton dom element
 var NumberButtonView=function(model) {
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
  console.log(numberButtonElement);
   return numberButtonElement;
  }
  init();
  return this;
}