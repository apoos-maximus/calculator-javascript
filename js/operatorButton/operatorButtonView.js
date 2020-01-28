//builds operator button dom element
function operatorButtonView (model) {
    var domOperatorButon = document.createElement("button");
    domOperatorButon.innerHTML = model.Label;
    domOperatorButon.style.backgroundColor = "#FFC300";
    domOperatorButon.style.color = "#FFFFFF";
    domOperatorButon.style.fontFamily = "monospace";
    domOperatorButon.style.border = " solid #581845";
    domOperatorButon.style.width = "60px";
    domOperatorButon.style.height = "30px";
    return domOperatorButon;
};