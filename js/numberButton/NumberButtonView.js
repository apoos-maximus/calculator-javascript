//builds numberButton dom element
function numberButtonView(model) {
   var domNumberButton = document.createElement("button");
   domNumberButton.innerHTML = model.Label;
   domNumberButton.style.backgroundColor = "#FFC300";
   domNumberButton.style.color = "#FFFFFF";
   domNumberButton.style.fontFamily = "monospace";
   domNumberButton.style.border = " solid #581845";
   domNumberButton.style.width = "30px";
   domNumberButton.style.height = "30px";
   return domNumberButton;
}