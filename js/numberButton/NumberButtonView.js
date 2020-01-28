//builds numberButton dom element
function numberButtonView(model) {
   var domNumberButton = document.createElement("button");
   domNumberButton.innerHTML = model.Label; 

   return domNumberButton;
}