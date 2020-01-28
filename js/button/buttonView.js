// builds button dom element
function buttonView(model){
    var dombuton = document.createElement("button");
    dombuton.innerHTML = model.Label;

    return dombuton;
}
