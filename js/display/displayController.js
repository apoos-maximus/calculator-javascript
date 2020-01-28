// interface for display class - returns display dom element
function displayControl() {
    var disply = new display();
    domDisplyElement = displayView(disply);
    return domDisplyElement; 
}