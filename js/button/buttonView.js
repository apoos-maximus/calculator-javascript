// builds button dom element
function buttonView(model){
    var dombuton = document.createElement("button");
    dombuton.innerHTML = model.Label;
    dombuton.style.backgroundColor = "#FFC300";
    dombuton.style.color = "#FFFFFF";
    dombuton.style.fontFamily = "monospace";
    dombuton.style.border = " solid #581845";
    dombuton.style.width = "60px";
    dombuton.style.height = "60px";
    return dombuton;
}
