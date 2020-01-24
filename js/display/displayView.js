function displayView (model) {
    domDisplyElement = document.createElement("div");
    domDisplyElement.innerHTML = model.Expression;
    return domDisplyElement;
}; 