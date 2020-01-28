// interface for button class : returns dom button
function buttonControl(specifics){
    var buton = new buttonModel();
    buton.Label = specifics.label;    
    
    buttonElement = buttonView(buton);
    return buttonElement;
};