//builds operator button dom element
function operatorButtonView (model) {
    var domOperatorButon = document.createElement("button");
    domOperatorButon.innerHTML = model.Label;

    return domOperatorButon;
};